import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { load } from 'cheerio';

const site = new URL('https://withoutsultang.github.io/');
const { projects } = JSON.parse(await readFile('portfolio.projects.json', 'utf8'));
const expected = ['/', ...projects.map(({ slug }) => `/projects/${slug}/`)];
assert.equal(new Set(expected).size, expected.length, 'Project slugs must be unique');

const entries = (await readdir('dist', { recursive: true })).map((entry) => entry.replaceAll('\\', '/'));
const pages = entries.filter((entry) => entry.endsWith('.html'));
const expectedPages = [...expected.map((route) => `${route.slice(1)}index.html`), '404.html'];
assert.deepEqual(pages.toSorted(), expectedPages.toSorted(), 'Static HTML routes differ from the project data');

const docs = new Map();
for (const filename of pages) {
  const html = await readFile(join('dist', filename), 'utf8');
  const route = filename === '404.html' ? '/404.html' : `/${filename.slice(0, -'index.html'.length)}`;
  const $ = load(html);

  assert.equal($('html').attr('lang'), 'ko', route);
  assert.equal($('main h1').length, 1, `${route} needs one main heading`);
  assert.ok($('title').text().trim(), `${route} is missing a title`);
  assert.ok($('meta[name="description"]').attr('content')?.trim(), `${route} is missing a description`);
  assert.ok($('meta[property="og:title"]').attr('content'), `${route} is missing OG metadata`);
  assert.ok($('meta[name="twitter:card"]').attr('content'), `${route} is missing Twitter metadata`);
  if (route === '/404.html') {
    assert.equal($('meta[name="robots"]').attr('content'), 'noindex', route);
  } else {
    assert.equal($('link[rel="canonical"]').attr('href'), new URL(route, site).href, route);
  }

  const ids = $('[id]').map((_, el) => $(el).attr('id')).get();
  assert.equal(ids.length, new Set(ids).size, `${route} contains duplicate ids`);
  docs.set(route, { $, ids: new Set(ids) });
}

let checkedLinks = 0;
for (const [route, { $ }] of docs) {
  const references = $('[href], [src], meta[property="og:image"], meta[name="twitter:image"]')
    .map((_, el) => $(el).attr('href') ?? $(el).attr('src') ?? $(el).attr('content')).get();

  for (const reference of references) {
    assert.ok(reference.trim(), `Empty link at ${route}`);
    const target = new URL(reference, new URL(route, site));
    if (target.origin !== site.origin) continue;

    const destination = docs.get(target.pathname);
    if (destination) {
      if (target.hash) {
        assert.ok(destination.ids.has(decodeURIComponent(target.hash.slice(1))), `${route} points to missing ${reference}`);
      }
    } else {
      const filename = decodeURIComponent(target.pathname).slice(1);
      const path = join('dist', filename);
      assert.ok(!relative('dist', path).startsWith('..') && (await stat(path)).isFile(), `${route} points to missing ${reference}`);
    }
    checkedLinks++;
  }
}

for (const project of projects) {
  const route = `/projects/${project.slug}/`;
  const detail = docs.get(route).$;
  assert.equal(detail('h1').text().trim(), project.name);
  assert.deepEqual(detail('.contribution-list li').map((_, el) => detail(el).text().trim()).get(), project.personalContribution);
  assert.equal(detail('#outcome-title + p').text().trim(), project.teamOutcome);
  assert.ok(detail('.verification-note p > span').text().trim(), `${route} needs a verification boundary`);
  const actualEvidence = detail('.source-list a').map((_, el) => detail(el).attr('href')).get();
  assert.deepEqual(actualEvidence, project.evidence.map(({ url }) => url), `${route} evidence differs from seed data`);
}

const sitemap = load(await readFile('dist/sitemap.xml', 'utf8'), { xml: true });
assert.deepEqual(sitemap('loc').map((_, el) => sitemap(el).text()).get(), expected.map((route) => new URL(route, site).href));
assert.match(await readFile('dist/robots.txt', 'utf8'), /^Sitemap: https:\/\/withoutsultang\.github\.io\/sitemap\.xml$/m);
assert.ok(entries.includes('.nojekyll'), 'Missing Pages marker');
assert.ok(!entries.some((entry) => /(?:\.map$|^static\/|(?:asset-)?manifest\.json$)/.test(entry)), 'Legacy build files in output');
console.log(`Verified ${pages.length} HTML pages, ${checkedLinks} internal references, project evidence, and sitemap.`);
