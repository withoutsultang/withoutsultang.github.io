import seed from '../../portfolio.projects.json';

export const github = 'https://github.com/withoutsultang';
export const owner = '김건우';

type ProjectContext = {
  group: string;
  problem: string;
  flow?: {
    title: string;
    steps: { label: string; scope?: '개인 기여' | '공동 작업' }[];
  };
};

const projectContext = {
  smartchain: {
    group: 'Backend · Integration',
    problem: '협력사의 증빙 제출과 원청 심사 과정에서 회사·도메인에 따라 결재 접근을 제한하고, 제출 결과가 심사 기록으로 이어져야 했습니다.',
    flow: {
      title: '팀 제출 흐름에서 맡은 두 지점',
      steps: [
        { label: '회사·도메인별 결재 접근 검증', scope: '개인 기여' },
        { label: '원청 심사로 제출' },
        { label: 'Review 저장 후 ID 반환', scope: '개인 기여' },
      ],
    },
  },
  'modu-library': {
    group: 'Backend · Cloud',
    problem: '도서 등록과 조회에 사용자 식별과 작성자 권한 검증이 필요했고, 교육용 AWS 배포에서는 ASG 인스턴스의 헬스체크 실패를 추적해야 했습니다.',
    flow: {
      title: '교육용 AWS 배포의 헬스체크 요청 경로',
      steps: [
        { label: 'ALB 대상 그룹의 상태 확인 요청' },
        { label: 'Spring Security의 헬스체크 인증 예외', scope: '개인 기여' },
        { label: 'Spring Boot의 /api/v1/health 응답', scope: '개인 기여' },
      ],
    },
  },
  flightmore: {
    group: 'API Integration',
    problem: '항공편 데이터를 사용자 조건과 대조해 알리려면 데이터 수집·저장, 알림 조건 설정, 외부 알림 채널이 연결돼야 했습니다.',
    flow: {
      title: 'tof 브랜치의 팀 통합 흐름',
      steps: [
        { label: '항공편 수집·저장' },
        { label: '가격 조건 매칭' },
        { label: 'Telegram 연결' },
      ],
    },
  },
  'interview-agent': {
    group: 'AI Applications',
    problem: '후속 질문을 생성하는 면접 에이전트에서 주제를 바꿀 때도 대화 흐름이 이어지도록 면접 진행안과 프롬프트를 다듬는 과제였습니다.',
    flow: {
      title: '팀 에이전트의 면접 진행 흐름',
      steps: [
        { label: '면접 질문' },
        { label: '응답 평가' },
        { label: '후속 질문 또는 주제 전환' },
      ],
    },
  },
  'ppt-agent': {
    group: 'AI Applications',
    problem: '슬라이드별 대본을 생성할 때 앞뒤 맥락이 끊기거나 인사가 반복되면 하나의 강의처럼 듣기 어려웠습니다.',
    flow: {
      title: '팀 강의 콘텐츠 생성 흐름',
      steps: [
        { label: '슬라이드 맥락' },
        { label: '강의 대본 생성', scope: '공동 작업' },
        { label: '음성·영상 생성' },
      ],
    },
  },
  'smart-daepa': {
    group: 'Device Integration',
    problem: '토양 수분에 따라 펌프를 제어하고, 센서 측정값을 라즈베리파이의 기존 저장 기능에 전달하는 과제였습니다.',
    flow: {
      title: '팀 과제의 센서 데이터 전달 흐름',
      steps: [
        { label: '토양 수분 측정' },
        { label: '시리얼 전송' },
        { label: '수신값을 기존 저장 함수에 전달', scope: '개인 기여' },
      ],
    },
  },
  absa: {
    group: 'Machine Learning',
    problem: '하나의 리뷰에 여러 속성이 포함될 수 있어 속성 검출 단계에 다중 레이블 표현이 필요했습니다.',
  },
  'incheon-tour-bot': {
    group: 'Data · Search',
    problem: '관광 정보를 검색에 활용하기 위해 TourAPI 데이터를 수집하고 문장 임베딩으로 검색할 수 있는지 실험했습니다.',
  },
  'pm10-har': {
    group: 'Machine Learning',
    problem: '대기질의 다음 시간 값을 예측하고, 별도의 센서 데이터 과제에서 사람의 행동 유형을 구분했습니다.',
  },
  'cat-dog-cnn': {
    group: 'Machine Learning',
    problem: '사전 학습 이미지 모델을 고양이·개 이진 분류에 적용하고, 혼동행렬로 분류 결과를 분석하는 과제였습니다.',
  },
} satisfies Record<string, ProjectContext>;

// Public wording keeps each verification boundary from the source record.
const verificationNotes: Partial<Record<keyof typeof projectContext, string>> = {
  smartchain: 'PostgreSQL HTTP 테스트와 복구 정책 개선은 교육 프로젝트 이후 2026년에 진행한 별도 작업입니다.',
  'modu-library': 'AWS 배포는 교육에서 제공한 아키텍처를 사용했고, 장애 분석에 AI의 도움을 받았습니다. Terraform mock_provider 테스트는 2026년에 모의 환경에서 진행했습니다.',
  flightmore: 'tof는 팀의 최종 통합 브랜치이고, master는 2026년 로컬 데모입니다. 개인 기여는 위 두 커밋을 기준으로 정리했습니다.',
  'interview-agent': '면접 진행안과 주제 전환 프롬프트가 개인 기여 범위입니다. 전체 에이전트는 팀 산출물이며, 테스트는 2026년에 별도로 추가했습니다.',
  'ppt-agent': '개인 기여는 대본 생성 모듈 공동 작업과 프롬프트 개선입니다. TTS·영상·퀴즈는 팀 작업 범위입니다.',
  'smart-daepa': '개인 기여는 펌프 동작 조건 수정과 시리얼 수신값 연결입니다. DB·카메라·Telegram은 팀 작업 범위입니다.',
  absa: '발표 F1은 팀 지표입니다. 일반 학습과 LoRA 학습을 비교한 실험에는 학습률 차이도 있었습니다.',
  'incheon-tour-bot': '관광 API 수집과 임베딩 실험은 2023년 작업이며, Flask 웹 UI는 2026년에 추가했습니다.',
  'pm10-har': '모델 성능은 팀 결과이며 개인 기여는 변수 중요도 분석과 노트북 정리입니다. 2026년 CI는 합성 데이터를 사용했습니다.',
  'cat-dog-cnn': '발표 수치는 수업 실험 환경에서 얻은 결과입니다. 개인 기여는 분류 헤드, 학습·평가 코드와 저장된 결과 분석입니다.',
};

export const projects = seed.projects.map((project) => {
  if (!Object.hasOwn(projectContext, project.slug)) {
    throw new Error(`Missing public context for ${project.slug}`);
  }

  const slug = project.slug as keyof typeof projectContext;
  const context: ProjectContext = projectContext[slug];
  return { ...project, ...context, verification: verificationNotes[slug] ?? project.timeBoundary };
});

export type Project = (typeof projects)[number];
export const projectPath = (slug: string) => `/projects/${slug}/`;
