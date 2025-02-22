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
  ESTJ: "network",
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
      "입학 후 첫 강의를 기다리는 시간, 처음 보는 강의실 옆자리 사람에게 말을 거는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["E"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "프로젝트를 진행할 때, 활발하게 의견을 주장하는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["E"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "시험 공부 계획을 구체적으로 세우며 잘 지키는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["J"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["J"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["P"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["P"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "여행을 가려고 할 때, 계획대로 여행이 흘러가지 않으면 불안한 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["S"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["S"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["N"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["N"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "자의적 혹은 타의적으로 리더 역할을 맡는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["T"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["T"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["F"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["F"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "소설이나 영화 등을 볼 때 판타지 장르를 선호하는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["N"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["N"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "혼자만의 이론을 세우고 생각해 보는 것을 좋아합니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["E"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "친구의 고민을 들을 때 어떤 공감을 해줄까 보다는 어떤 해결책이 있을까하는 생각이 먼저 드는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["T"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["T"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["F"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["F"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "학창시절 다른과목보다 수학, 과학 과목을 특히 좋아하곤 했습니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["N"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["N"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "실행력이 빠른 편이라 계획을 세우고 바로 이행합니다. 그리고 한 번 시작한 일은 제대로 마무리를 보는 편입니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["E"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
    ],
  },
  {
    question: "스스로 예술가적 기질이 강하다고 생각합니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["N"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["N"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["S"],
          value: 3,
        },
      },
    ],
  },
  {
    question:
      "남이 나를 지적해도 내가 틀렸다는 확실한 증거를 제시하지 않는 한 생각을 잘 바꾸지 않습니다.",
    options: [
      {
        text: "매우 그렇다",
        behavior: {
          mbti: ["I"],
          value: 3,
        },
      },
      {
        text: "그렇다",
        behavior: {
          mbti: ["I"],
          value: 1,
        },
      },
      {
        text: "그렇지 않다",
        behavior: {
          mbti: ["E"],
          value: 1,
        },
      },
      {
        text: "매우 그렇지 않다",
        behavior: {
          mbti: ["E"],
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
      type: "session" | "event";
    };
    emoji: string;
  };
} = {
  frontend: {
    image: "/images/frontend.png",
    emoji: "🚀",
    summary: "웹 화면을 만드는 마법사",
    title: "프론트엔드 개발자",
    activity: { title: "처음부터 시작하는 웹 프론트 엔드", type: "session" },
    description:
      "**프론트엔드 개발자**는 우리가 보는 웹사이트나 앱 화면을 만들고, 상호작용을 설계하는 역할을 해요! 🖥️ **빠른 속도**, **반응형 디자인**, **접근성**까지 고려해 UX를 개선하는 직군이에요. 🚀",
  },
  mobile: {
    image: "/images/mobile.png",
    emoji: "📱",
    summary: "손안의 세상을 만드는 창조자",
    title: "모바일 앱 개발자",
    activity: {
      title: "리액트 네이티브를 이용한 앱 개발 입문",
      type: "session",
    },
    description:
      "**모바일 앱 개발자**는 스마트폰에서 동작하는 앱을 만들어요! 📱 **React Native, Flutter** 또는 **네이티브 기술**을 활용해 최적화된 앱을 개발해요. 🚀",
  },
  security: {
    image: "/images/security.png",
    emoji: "🔒",
    summary: "디지털 세상의 수호자",
    title: "보안 전문가",
    activity: { title: "Pre BOB 맛보기", type: "session" },
    description:
      "**보안 전문가**는 해킹으로부터 시스템과 데이터를 보호하는 역할을 해요! 🔒 **취약점 분석, 암호학, 침해 대응** 기술을 연구하며 보안 위협에 대응하는 직군이에요. ⚔️",
  },
  data: {
    image: "/images/data.png",
    emoji: "📊",
    summary: "데이터 속 숨겨진 비밀을 찾는 탐험가",
    title: "데이터 과학자",
    activity: { title: "R 데이터 분석 기초", type: "session" },
    description:
      "**데이터 과학자**는 데이터를 분석하고 의미 있는 인사이트를 도출하는 역할을 해요! 📊 **통계, 머신러닝, 데이터 시각화** 기술을 활용해 기업의 의사결정을 돕는 직군이에요. 🔍",
  },
  ai: {
    image: "/images/ai.png",
    emoji: "🤖",
    summary: "기계를 똑똑하게 만드는 마법사",
    title: "인공지능(AI) 개발자",
    activity: { title: "컴퓨터한테 말 가르치는 법", type: "session" },
    description:
      "**AI 개발자**는 **컴퓨터가 스스로 학습하고 판단할 수 있도록 만드는 일**을 해요! 🤖 **딥러닝, 머신러닝**을 활용해 다양한 분야에서 **AI 모델을 개발**하는 직군이에요. 🚀",
  },
  network: {
    image: "/images/network.png",
    emoji: "🌐",
    summary: "인터넷의 길을 여는 설계자",
    title: "네트워크(클라우드) 엔지니어",
    activity: { title: "스프링 부트로 배우는 서버 기초", type: "session" },
    description:
      "**네트워크(클라우드) 엔지니어**는 **인터넷이 원활하게 동작하도록 서버와 네트워크 환경을 구축**하는 역할을 해요! 🌐 **AWS, GCP** 같은 클라우드 기술을 활용하며 **보안과 최적화**를 고민하는 직군이에요. 🔧",
  },
  game: {
    image: "/images/game.png",
    emoji: "🎮",
    summary: "즐거움을 코딩하는 예술가",
    title: "게임 개발자",
    activity: {
      title: "Unity로 FPS 멀티플레이 좀비 게임 만들기",
      type: "session",
    },
    description:
      "**게임 개발자**는 우리가 즐기는 게임을 직접 만드는 역할을 해요! 🎮 **Unity, Unreal Engine**을 활용해 게임을 설계하고 개발하는 직군이에요. 🕹️",
  },
  backend: {
    image: "/images/backend.png",
    emoji: "⚙️",
    summary: "보이지 않는 곳에서 세상을 움직이는 엔지니어",
    title: "백엔드 개발자",
    activity: { title: "씹어먹는 백엔드의 세계", type: "session" },
    description:
      "**백엔드 개발자**는 **웹사이트와 앱이 원활하게 동작하도록 서버를 개발**하는 역할을 해요! 💾 **FastAPI, Node.js, Spring Boot** 등을 활용해 **데이터 처리와 보안**을 담당하는 직군이에요. ⚙️",
  },
  designer: {
    image: "/images/designer.png",
    emoji: "🎨",
    summary: "감각을 그려내는 예술가",
    title: "디자이너",
    activity: { title: "영상편집을 위한 영차영차", type: "session" },
    description:
      "**디자이너**는 **제품이나 서비스의 시각적 요소와 UX를 설계**하는 역할을 해요! 🎨 **Figma, Photoshop** 등을 활용해 **직관적이고 아름다운 디자인**을 만드는 직군이에요. ✨",
  },
  pm: {
    image: "/images/pm.png",
    emoji: "📝",
    summary: "제품을 이끌어나가는 조직자",
    title: "프로젝트 매니저(PM)",
    activity: { title: "쿠씨톤", type: "event" },
    description:
      "**PM(Product Manager)**은 **제품 개발의 방향을 정하고, 팀을 이끌어 성공적인 서비스를 만드는 역할**을 해요! 🚀 **데이터 기반 의사결정**을 내리고, **기획·디자인·개발 팀과 협업**하는 직군이에요. 📊",
  },
};
