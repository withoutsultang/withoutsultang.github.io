# 김건우 개발자 포트폴리오

V3.1 공개용 프로젝트 기록을 바탕으로 만든 한국어 포트폴리오입니다. Astro와 TypeScript로 홈과 프로젝트별 HTML을 빌드합니다. 정적 경로에서 상세 페이지를 바로 열거나 새로고침할 수 있습니다.

## 개발과 미리보기

Node.js 24 LTS와 npm을 사용합니다.

```sh
npm ci
npm run dev
```

개발 서버의 기본 주소는 `http://localhost:4321/`입니다. Work에서 출시용 결과를 검수할 때는 아래 명령을 실행하고, 같은 컴퓨터에서 표시된 주소를 여세요.

```sh
npm run check
npm run build
npm run test:links
npm run preview
```

홈과 `/projects/smartchain/`을 먼저 확인한 뒤 [브라우저 검수 체크리스트](WORK_BROWSER_QA.md)를 따라 확인합니다. `test:links`는 `dist/`의 내부 경로·앵커, 메타데이터, 사이트맵, 프로젝트 기여와 근거 URL을 확인합니다. GitHub 근거 링크의 접근 가능 여부는 별도로 확인합니다.

## 콘텐츠와 구조

| 경로 | 용도 |
| --- | --- |
| `portfolio.projects.json` | 공개 검증 데이터. 개인 기여, 팀 산출물, 후속 작업 시점, 원본 근거 |
| `src/data/portfolio.ts` | 프로젝트 문제 설명, 흐름과 시점 표시 문구 |
| `src/pages/index.astro` | 소개, 대표·기타 프로젝트, 기술 스택, 교육 경험 |
| `src/pages/projects/[slug].astro` | 프로젝트별 정적 상세 페이지 |
| `public/` | 파비콘, 공유 이미지, Pages용 `.nojekyll` |
| `scripts/check-output.mjs` | 빌드 결과의 내부 링크·메타데이터·콘텐츠 검증 |

프로젝트를 수정할 때는 JSON의 개인 기여와 팀 산출물을 구분하고, 2026년 후속 작업은 시점 범위에 기록합니다. 새 항목을 추가할 때는 `src/data/portfolio.ts`에 공개 가능한 문제 설명도 추가합니다.

## GitHub Pages

배포 대상은 사용자 사이트의 루트인 `https://withoutsultang.github.io/`입니다. `astro.config.mjs`의 `base`는 `/`이며, 각 상세 페이지는 `dist/projects/<slug>/index.html`로 빌드됩니다.

PR에서는 타입 검사, 빌드, 내부 링크 검사만 실행합니다. 공개 배포에는 저장소 소유자의 승인과 Pages 이용 자격 및 설정 확인이 필요합니다.

1. 승인 후 저장소의 **Settings → Pages**에서 이용 자격과 현재 Source를 확인합니다. 기존 브랜치 게시가 활성화되어 있으면, 머지 전에 전환 순서를 정합니다.
2. **GitHub Actions**를 Source로 선택하고 검토한 PR을 `main`에 반영합니다.
3. **Actions → Portfolio → Run workflow**에서 `main`을 선택하고 `publish`를 체크합니다. 워크플로는 검증을 통과한 `dist/`만 Pages에 업로드합니다.
4. 배포 작업이 끝나면 로그아웃 브라우저에서 홈과 상세 페이지 직접 접속·새로고침을 확인합니다.

2023년 빌드 결과물은 Git 이력에서 확인할 수 있습니다. 저장소의 공개 상태를 검토할 때는 이전 커밋에도 개인 식별 정보가 남아 있다는 점을 함께 고려합니다.

[Astro GitHub Pages 가이드](https://docs.astro.build/en/guides/deploy/github/) · [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
