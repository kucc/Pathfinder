import { Question } from "./types";

export const RESULT: {
  [key: string]: keyof typeof CAREER;
} = {
  ENTP: "frontend",
  ESFP: "mobile",
  INTJ: "security",
  ESTP: "security",
  ISTJ: "data",
  ISFJ: "data",
  ENTJ: "ai",
  INFJ: "ai",
  ESTJ: "devops",
  INFP: "game",
  ISTP: "backend",
  INTP: "backend",
  ISFP: "designer",
  ENFP: "designer",
  ENFJ: "pm",
  ESFJ: "pm",
};

export const QUESTION: Question[] = [
  {
    question:
      "입학 후 첫 강의를 기다리는 중! 처음 보는 강의실 옆자리 사람에게 나는?",
    options: [
      {
        text: "바로 말 걸고 친해진다! 🥳",
        behavior: {
          mbti: ["E"],
          value: 3,
        },
      },
      {
        text: "살짝 고민하다가 조심스럽게 인사한다. 👋",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "괜히 머뭇거리다가 못 말하고 지나간다. 🤭",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "그냥 조용히 내 세계에 집중한다! 🤐",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "팀플 회의 중! 내 의견을 어떻게 말할까?",
    options: [
      {
        text: "신나게 내 의견을 펼쳐서 분위기를 이끈다! 🔥",
        behavior: {
          mbti: ["E", "T"],
          value: 3,
        },
      },
      {
        text: "적극적으로 참여하지만, 살짝 조심스럽다. 🙄",
        behavior: {
          mbti: ["E", "F"],
          value: 1,
        },
      },
      {
        text: "필요할 때만 조용히 의견을 내는 편! 🙊",
        behavior: {
          mbti: ["I", "T"],
          value: 1,
        },
      },
      {
        text: "다른 의견을 경청하는 게 중요하다고 생각한다 🎧",
        behavior: {
          mbti: ["I", "F"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "벚꽃의 꽃말은 중간고사... 시험 공부는 어떻게 할까?",
    options: [
      {
        text: "완벽한 플랜을 세우고 착착 지킨다! 📅",
        behavior: {
          mbti: ["J"],
          value: 3,
        },
      },
      {
        text: "계획은 세우지만 융통성 있게 조절한다 😉",
        behavior: {
          mbti: ["J"],
          value: 1,
        },
      },
      {
        text: "그때그때 흐름대로~ 🎵",
        behavior: {
          mbti: ["P"],
          value: 1,
        },
      },
      {
        text: "일단 시작이 어려워... 벼락치기가 내 스타일! ⚡",
        behavior: {
          mbti: ["P"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "시험 공부를 하던 중, 집중하려고 애쓰는데 갑자기 머릿속에 재미있는 생각이 스쳐 지나간다! 이럴 때 나는 어떻게 할까?",
    options: [
      {
        text: "혼자 상상의 나래를 펼친다! 😎",
        behavior: {
          mbti: ["I", "N"],
          value: 3,
        },
      },
      {
        text: "가끔은 머릿속에서 생각을 정리하는 것도 좋지 📝",
        behavior: {
          mbti: ["I", "N"],
          value: 1,
        },
      },
      {
        text: "그럴 시간에 공부나 빨리 끝내고 논다 🍕",
        behavior: {
          mbti: ["E", "S"],
          value: 1,
        },
      },
      {
        text: "오! 친구들이랑 대화 주제로 좋겠는걸? 🗣️",
        behavior: {
          mbti: ["E", "S"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "교수님이 조별과제를 내주셨다. 조장을 정하라고 하시는데...",
    options: [
      {
        text: "내가 이끌어야 직성이 풀린다. 💪",
        behavior: {
          mbti: ["T", "J"],
          value: 3,
        },
      },
      {
        text: "누군가 해야 한다면... 내가 해도 괜찮아 😁",
        behavior: {
          mbti: ["T", "J"],
          value: 1,
        },
      },
      {
        text: "굳이? 저는 서포트 잘 할게요.. 🤗",
        behavior: {
          mbti: ["F", "P"],
          value: 1,
        },
      },
      {
        text: "절대 싫다. 🤷‍♂️",
        behavior: {
          mbti: ["F", "P"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "친구들이 영화를 보러 가자고 하네. 내가 좋아하는 영화 스타일은?",
    options: [
      {
        text: "철학적이고 상징적인 영화! 해석이 재밌어 💎",
        behavior: {
          mbti: ["N"],
          value: 3,
        },
      },
      {
        text: "독창적인 세계관! 기존에 없던 설정이 좋아 🌟",
        behavior: {
          mbti: ["N"],
          value: 1,
        },
      },
      {
        text: "내가 공감할 수 있는 이야기가 좋아 🎭",
        behavior: {
          mbti: ["S"],
          value: 1,
        },
      },
      {
        text: "리얼리티와 개연성이 중요해 📚",
        behavior: {
          mbti: ["S"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "교양 수업 시간, 교수님이 창작 과제를 내주셨다. 자유롭게 표현해 보라고 하시는데...",
    options: [
      {
        text: "벌써 아이디어가 넘친다! 가보자고 🎭",
        behavior: {
          mbti: ["N", "F"],
          value: 3,
        },
      },
      {
        text: "그래도 해볼 만한데? 🤔",
        behavior: {
          mbti: ["N", "F"],
          value: 1,
        },
      },
      {
        text: "최선을 다한다.. 최선만 다한다.. 💪",
        behavior: {
          mbti: ["S", "T"],
          value: 1,
        },
      },
      {
        text: "차라리 레포트를 주세요 교수님 📑",
        behavior: {
          mbti: ["S", "T"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "토론 수업 중 열띤 논의가 이어지는 가운데, 한 학우가 내 의견에 반박했다!",
    message: "근데 그거 좀 다른 해석도 가능하지 않아?",
    options: [
      {
        text: "그래? 내 의견의 근거를 설명해볼게! 🔥",
        behavior: {
          mbti: ["E", "J"],
          value: 3,
        },
      },
      {
        text: "그렇다면 날 설득해봐 🔍",
        behavior: {
          mbti: ["I", "J"],
          value: 1,
        },
      },
      {
        text: "어? 그런가? 한 번 들어본다 😇",
        behavior: {
          mbti: ["I", "P"],
          value: 1,
        },
      },
      {
        text: "좋은 의견이네! 적극 반영 💬",
        behavior: {
          mbti: ["E", "P"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "드디어 종강이다! 신나게 여행을 떠났는데... 예상치 못한 변수로 계획이 틀어져버렸다.",
    options: [
      {
        text: "불안해하며 다음 계획을 세운다 😱",
        behavior: {
          mbti: ["S", "J"],
          value: 3,
        },
      },
      {
        text: "조금 짜증나지만 어쩔 수 없지.. ✨",
        behavior: {
          mbti: ["S", "J"],
          value: 1,
        },
      },
      {
        text: "즉흥적인 변화도 나쁘지 않을지도~ 🎶",
        behavior: {
          mbti: ["N", "P"],
          value: 1,
        },
      },
      {
        text: "애초에 계획이 없어서 질문이 이해가 안 간다. 🏝️",
        behavior: {
          mbti: ["N", "P"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "친구가 갑자기 고민 상담을 요청했다!",
    message: "나 헤어졌다... 지금 춘자로 와줄 수 있어?",
    options: [
      {
        text: "왜 헤어졌어? 이유부터 들어보고 🤔",
        behavior: {
          mbti: ["T"],
          value: 3,
        },
      },
      {
        text: "슬프겠지만 이미 헤어진 걸 어떡해 😥",
        behavior: {
          mbti: ["T"],
          value: 1,
        },
      },
      {
        text: "일단 아무 말 없이 들어준다 🤫",
        behavior: {
          mbti: ["F"],
          value: 1,
        },
      },
      {
        text: "말보단 따뜻한 라면 한 입! 🍜",
        behavior: {
          mbti: ["F"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "학창 시절, 내가 좋아했던 과목은...",
    options: [
      {
        text: "수학이나 물리가 좋았어 🧮",
        behavior: {
          mbti: ["N", "T"],
          value: 3,
        },
      },
      {
        text: "두루두루 공부하는 게 좋았어! 📚",
        behavior: {
          mbti: ["N", "T"],
          value: 1,
        },
      },
      {
        text: "국어, 사회 같은 스토리 있는 과목이 좋았지! 📖",
        behavior: {
          mbti: ["S", "F"],
          value: 1,
        },
      },
      {
        text: "나는 예체능파.. 🎨",
        behavior: {
          mbti: ["S", "F"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "동아리에서 큰 행사가 잡혔다! 기획부터 준비해야 하는데.. 어떻게 할까?",
    options: [
      {
        text: "바로 역할 나누고 일정 짜서 착착 진행! ✅",
        behavior: {
          mbti: ["E", "J"],
          value: 3,
        },
      },
      {
        text: "팀원들 의견을 조율하면서 조금씩 진행! 🤔",
        behavior: {
          mbti: ["E", "J"],
          value: 1,
        },
      },
      {
        text: "일단 분위기 보고 맞춰가자.. 👀",
        behavior: {
          mbti: ["I", "P"],
          value: 1,
        },
      },
      {
        text: "급하게 할 필요 있나? 좀 쉬고 하자.. 💤",
        behavior: {
          mbti: ["I", "P"],
          value: 3,
        },
      },
    ],
  },
];

export const CAREER: {
  [key: string]: {
    image: string;
    title: string;
    summary: string;
    description: string;
    activity: {
      title: string;
      type: "session" | "event" | "study";
      semester: string;
      description: string;
    }[];
    emoji: string;
  };
} = {
  frontend: {
    image: "/images/frontend.png",
    emoji: "🚀",
    summary: "웹 화면을 만드는 마법사",
    title: "프론트엔드 개발자",
    activity: [
      {
        title: "처음부터 시작하는 웹 프론트엔드 기초",
        type: "session",
        semester: "24-1",
        description:
          "HTML, CSS, JavaScript의 기본 개념을 익히고 React를 활용해 실습을 진행했습니다.",
      },
      {
        title: "리액트...문서 췍!!!",
        type: "session",
        semester: "24-2",
        description:
          "리액트 공식 문서를 함께 살펴보며 작동 원리와 실무 활용법을 학습했습니다.",
      },
    ],
    description:
      "**프론트엔드 개발자**는 우리가 보는 웹사이트나 앱 화면을 만들고, 상호작용을 설계하는 역할을 해요! 🖥️ **빠른 속도**, **반응형 디자인**, **접근성**까지 고려해 UX를 개선하는 직군이에요. 🚀",
  },
  mobile: {
    image: "/images/mobile.png",
    emoji: "📱",
    summary: "손안의 세상을 만드는 창조자",
    title: "모바일 앱 개발자",
    activity: [
      {
        title: "오순도순 Flutter 스터디",
        type: "study",
        semester: "22-2",
        description: "Flutter 기본 개념을 학습하고 실습을 진행했습니다.",
      },
      {
        title: "리액트 네이티브를 이용한 앱 개발 입문",
        type: "session",
        semester: "22-1",
        description:
          "리액트 네이티브를 활용해 간단한 앱을 개발하고 설치까지 진행했습니다.",
      },
    ],
    description:
      "**모바일 앱 개발자**는 스마트폰에서 동작하는 앱을 만들어요! 📱 **React Native, Flutter** 또는 **네이티브 기술**을 활용해 최적화된 앱을 개발해요. 🚀",
  },
  security: {
    image: "/images/security.png",
    emoji: "🔒",
    summary: "디지털 세상의 수호자",
    title: "보안 전문가",
    activity: [
      {
        title: "정뾰안과 친해지기",
        type: "session",
        semester: "23-2",
        description:
          "정보보안 개념을 익히고, Linux 및 웹 보안 취약점을 실습하며 학습했습니다.",
      },
      {
        title: "시스템 해킹(포너블) 공부",
        type: "study",
        semester: "23-2",
        description:
          "드림핵 로드맵을 따라 시스템 해킹과 취약점 분석을 공부했습니다.",
      },
    ],
    description:
      "**보안 전문가**는 해킹으로부터 시스템과 데이터를 보호하는 역할을 해요! 🔒 **취약점 분석, 암호학, 침해 대응** 기술을 연구하며 보안 위협에 대응하는 직군이에요. ⚔️",
  },
  data: {
    image: "/images/data.png",
    emoji: "📊",
    summary: "데이터 속 숨겨진 비밀을 찾는 탐험가",
    title: "데이터 과학자",
    activity: [
      {
        title: "R 데이터 분석 기초",
        type: "session",
        semester: "23-2",
        description:
          "R을 활용한 다양한 데이터 분석 기법과 회귀·다변량·범주형 데이터 분석을 학습했습니다.",
      },
      {
        title: "내가 데이터분석을 아르켜줄게~",
        type: "session",
        semester: "24-2",
        description:
          "모바일 서비스 분석 방법론을 배우고, 가설 설정 및 검증 방법을 익혔습니다.",
      },
    ],
    description:
      "**데이터 과학자**는 데이터를 분석하고 의미 있는 인사이트를 도출하는 역할을 해요! 📊 **통계, 머신러닝, 데이터 시각화** 기술을 활용해 기업의 의사결정을 돕는 직군이에요. 🔍",
  },
  ai: {
    image: "/images/ai.png",
    emoji: "🤖",
    summary: "기계를 똑똑하게 만드는 마법사",
    title: "인공지능(AI) 개발자",
    activity: [
      {
        title: "컴퓨터한테 말 가르치는 법",
        type: "session",
        semester: "24-1",
        description:
          "자연어처리 기초 개념과 딥러닝 모델 학습 과정을 살펴보았습니다.",
      },
      {
        title: "AttentionK: 자연어처리 논문 리뷰 스터디",
        type: "study",
        semester: "24-1",
        description:
          "최신 자연어처리 논문을 리뷰하고, 딥러닝 기반 NLP 코딩을 실습했습니다.",
      },
    ],
    description:
      "**AI 개발자**는 **컴퓨터가 스스로 학습하고 판단할 수 있도록 만드는 일**을 해요! 🤖 **딥러닝, 머신러닝**을 활용해 다양한 분야에서 **AI 모델을 개발**하는 직군이에요. 🚀",
  },
  devops: {
    image: "/images/devops.png",
    emoji: "🌐",
    summary: "서비스 운영과 배포를 자동화하는 전문가",
    title: "데브옵스 엔지니어",
    activity: [
      {
        title: "스프링 부트로 배우는 서버 기초",
        type: "session",
        semester: "23-2",
        description: "스프링 부트를 활용해 서버의 기초 개념을 학습했습니다.",
      },
      {
        title: "찍어 먹는 개발의 세계",
        type: "session",
        semester: "23-2",
        description:
          "백엔드, 클라우드, 데이터베이스, 데브옵스를 포함한 다양한 개발 분야에 대한 기본적인 개념을 소개하는 활동이었습니다.",
      },
    ],
    description:
      "**데브옵스 엔지니어**는 **개발과 운영을 자동화하고 최적화하는 일**을 해요! ⚙️ **CI/CD, 인프라 관리, 모니터링** 등을 활용해 **서비스가 안정적으로 운영**되도록 지원하는 직군이에요. 🚀",
  },
  game: {
    image: "/images/game.png",
    emoji: "🎮",
    summary: "즐거움을 코딩하는 예술가",
    title: "게임 개발자",
    activity: [
      {
        title: "Unity로 FPS 멀티플레이 좀비 게임 만들기",
        type: "session",
        semester: "24-1",
        description:
          "Unity를 활용한 3D 게임 개발과 멀티플레이 구현을 실습했습니다.",
      },
      {
        title: "Unity로 만드는 FPS 멀티플레이 게임",
        type: "session",
        semester: "23-2",
        description:
          "Unity로 3D 게임 개발 기초를 익히고, 네트워크 개념을 접목한 멀티플레이를 구현했습니다.",
      },
    ],
    description:
      "**게임 개발자**는 우리가 즐기는 게임을 직접 만드는 역할을 해요! 🎮 **Unity, Unreal Engine**을 활용해 게임을 설계하고 개발하는 직군이에요. 🕹️",
  },
  backend: {
    image: "/images/backend.png",
    emoji: "⚙️",
    summary: "보이지 않는 곳에서 세상을 움직이는 엔지니어",
    title: "백엔드 개발자",
    activity: [
      {
        title: "씹어먹는 백엔드의 세계",
        type: "session",
        semester: "24-1",
        description:
          "백엔드 개발자의 기술을 탐색하고, 실습을 통해 직접 개발을 경험했습니다.",
      },
      {
        title: "백엔드를 배워보자",
        type: "session",
        semester: "24-2",
        description: "FastAPI를 기반으로 백엔드 개발 기초 개념을 학습했습니다.",
      },
    ],
    description:
      "**백엔드 개발자**는 **웹사이트와 앱이 원활하게 동작하도록 서버를 개발**하는 역할을 해요! 💾 **FastAPI, Node.js, Spring Boot** 등을 활용해 **데이터 처리와 보안**을 담당하는 직군이에요. ⚙️",
  },
  designer: {
    image: "/images/designer.png",
    emoji: "🎨",
    summary: "감각을 그려내는 예술가",
    title: "디자이너",
    activity: [
      {
        title: "쿠씨톤",
        type: "event",
        semester: "매 학기",
        description:
          "KUCC 교내 해커톤으로, 기획, 개발, 디자인까지 모두 해볼 수 있는 활동입니다.",
      },
      {
        title: "나만의 작고 소중한 UI 컴포넌트 라이브러리 만들기",
        type: "session",
        semester: "24-1",
        description:
          "예쁘고 재사용 가능한 자신만의 웹 UI 컴포넌트를 디자인 및 개발해보는 활동이었습니다.",
      },
    ],
    description:
      "**디자이너**는 **제품이나 서비스의 시각적 요소와 UX를 설계**하는 역할을 해요! 🎨 **Figma, Photoshop** 등을 활용해 **직관적이고 아름다운 디자인**을 만드는 직군이에요. ✨",
  },
  pm: {
    image: "/images/pm.png",
    emoji: "📝",
    summary: "제품을 이끌어나가는 조직자",
    title: "프로젝트 매니저(PM)",
    activity: [
      {
        title: "쿠씨톤",
        type: "event",
        semester: "매 학기",
        description:
          "KUCC 교내 해커톤으로, 기획, 개발, 디자인까지 모두 해볼 수 있는 활동입니다.",
      },
    ],
    description:
      "**PM(Product Manager)**은 **제품 개발의 방향을 정하고, 팀을 이끌어 성공적인 서비스를 만드는 역할**을 해요! 🚀 **데이터 기반 의사결정**을 내리고, **기획·디자인·개발 팀과 협업**하는 직군이에요. 📊",
  },
};
