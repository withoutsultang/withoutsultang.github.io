# Portfolio website — Codex build brief (V3.1)

> 작성 기준: 2026-11-05 내부 마스터 V3.1의 **공개 가능한 일부 사실만** 분리. 이 명세와 `portfolio.projects.json`은 개인정보가 없는 외부 공개용 데이터다.

## Goal

Build a polished, fast, accessible **Korean-first job-seeking developer portfolio** for **Kim Geonwoo / github @withoutsultang**. Position as a junior engineer interested in **business backend, system integration, AI/API integration, and environment troubleshooting**, not as a senior architect or commercial operations lead. Tone: technical, concise, credible and welcoming. Do not overstate unverified results.

## Existing repository situation

- Repository: `withoutsultang/withoutsultang.github.io` (private at preparation time).
- Current `main` contains **old Create React App build output** from a school exercise, but not an editable app source. `index.html` contains a school student ID in its title.
- **Do not publish old sourcemaps, student ID, credentials, or legacy personal data**. Preserve existing files via Git history; replace old published artifacts only once new build is ready.
- GitHub Pages source, account plan/visibility eligibility, and live deployment status need verification. **Do not change repository visibility or Pages settings without user's approval**.
- Site should work at `https://withoutsultang.github.io/` if Pages is configured. Do not claim it is live before testing.

## Design direction

- Editorial, modern portfolio — light neutrals, navy/ink accents, restrained blue highlights. Polished dark mode preferred as optional, **not a sea of neon badges**.
- Strong typography, clear visual hierarchy, subtle interactions, responsive project cards, no stock photos or auto-generated avatar.
- Keyboard accessible navigation, WCAG-oriented contrast, reduced motion support, mobile width 360px and up.
- A fast static-first implementation, **Astro + TypeScript** preferred for static project detail URLs and SEO; React islands only if needed. If changing stack, document why. Do not copy old compiled CRA files into source.
- Optimize page size, accessible alt labels, lazy media, metadata, sitemap/robots/OG tags. Prefer safe local SVG/CSS visuals; avoid external tracking services.

## Content structure

1. **Hero:** "업무 흐름을 이해하고, 기술을 연결해 작동하는 시스템을 만듭니다." / Backend · System Integration · AI Applications. CTAs: "대표 프로젝트" and GitHub.
2. **Focus:** Workflow & authorization; API/DB integration; setup, logs & troubleshooting; agent applications. These are interest and practiced areas, **not claimed certifications of independent architectural expertise**.
3. **Featured projects:** first five or six records with `featured:true` from `portfolio.projects.json`. Each card: one-sentence problem, verified personal contribution, team context, tech, original proof link.
4. **Project detail pages:** Problem / Context / My contribution / Architecture or flow (diagram only if grounded) / Evidence / Team outcome / When and how verified. Visually frame limitations respectfully, not as a weakness list.
5. **Other work:** remaining projects from the JSON; optional grouping by Backend / AI / Automation / Data. Maintain original historical dates.
6. **Skills:** grouped by scope of usage: backend, data, AI integration, cloud, tools. Avoid level bars or years of professional work.
7. **Background:** Inha Technical College bachelor’s degree via advanced course; Naver boostcamp; KT AIVLE School; brief military computer support if helpful. Never disclose complete personal academic records.
8. **Contact:** GitHub link only by default. No phone, home address, birthdate, license number, student ID, or personal IDs. Do not publish the private SSOT.

## Content contract

`portfolio.projects.json` is supplied as **public-source-safe seed data**. Do not claim all content is self-authored code. Preserve the precise distinction among:
- `personalContribution`: documented own PR/commit or user-confirmed actions.
- `teamOutcome`: team deliverable, award, or broader implementation.
- `timeBoundary`: 2026 maintenance / mock CI / team / historical difference; compact note in each detail page, not necessarily prominent on the landing page.
- `evidence`: direct project, original PR/commit, or README links. Use these as the source of truth and do not invent URLs.

**Absolute exclusions:** private SSOT data, 155-card archive, student ID, phone/address, birthdate, license/certificate numbers, pseudonymous real customer metrics, commercial production uptime, 2026 mock tests as past service proof, SmartChain `canTransitionTo()` own implementation, AI merge conflicts = 0, AI interviewer 100% solo, every AWS resource independently designed, all five incidents solved alone, validated GDPR compliance.

**Awards:** "KT AIVLE School 빅프로젝트 최우수상" only, never numerically ranked.

## Build and verification

- Create actual source structure in the repository with reproducible install/build commands and a clear `README.md`.
- Make navigation/routes work on GitHub Pages; static generation preferred to avoid SPA 404 on refresh.
- `npm ci` or reproducible package manager, `npm run build`, link checker, linter/type check; add CI workflow with no secret-dependent deployment assumptions.
- Test all named project links including /tree/tof and PRs. Private `boostC` code must not be linked as if publicly accessible.
- Remove superseded CRA `static/js/*.map` and other legacy assets from new output only **after checking generated site references and preserving Git history**.
- No activation/visibility changes without a separate user decision; report final branch, commit(s), build results, deployed URL if verified, blockers and any source-content corrections.
- Create a preview/build result before production deployment; include desktop/mobile screenshots for QA when possible.

## Handoff to Work

After Codex implements and produces a preview or live URL, use `WORK_BROWSER_QA.md` for browser-based inspection. Return findings to Codex for fixes; then get final content review against V3.1 evidence.
