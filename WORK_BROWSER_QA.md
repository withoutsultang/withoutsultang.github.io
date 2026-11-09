# Work browser QA — Portfolio V3.1

Use Work mode's Cloud Browser after Codex has produced a build preview / deployable URL. **Do not assert deployment works until opening the actual URL**. No need to access the private V3.1 master; public site assertions should match `portfolio.projects.json` and primary PR/commit evidence.

## Checkpoints
1. Confirm the actual URL and whether it is publicly visible in a signed-out browser. If inaccessible, capture the error/status and stop claiming "live".
2. Navigate top navigation; project filters/tabs; all featured project details; footer; evidence GitHub links. Test refresh on nested routes.
3. Visual QA: desktop ~1440px, tablet ~768px, mobile 360/390px. Look for truncated Korean, overflow, touch targets, broken icons, awkward whitespace, readability.
4. Accessibility: tab order, visible focus, headings, accessible names, keyboard interaction, color contrast, reduced motion.
5. Content integrity: SmartChain is 7-person team and only team award 최우수상; do not claim personal entire AI model. Library was a course-given AWS architecture with AI-assisted troubleshooting; no real production uptime or sole infrastructure ownership. FlightMore final integration is tof branch; interviewer agent was 7-person team and applicant's proposal selected; PPT Agent script was shared implementation.
6. Privacy: search every page/metadata/HTML for student ID, phone, street address, full birth date, credential identifiers, hardcoded secrets, private SSOT. There must be no public access to the internal experience database.
7. SEO/performance: meaningful HTML title and description, OG/Twitter cards, canonical URL, sitemap, robots, no stale CRA / source map paths and no 404 when refreshing detail pages.
8. Evidence: open key original PR/commit destinations and confirm they lead to the described behavior. Do not replace a broken link with a fabricated one.
9. Return severity-ranked bugs with URL, browser width, steps to reproduce, actual/expected, screenshot, and suggested fix. Send to Codex for correction; re-check after changes.

No production publishing, repository visibility change, or credential handling without explicit user approval.
