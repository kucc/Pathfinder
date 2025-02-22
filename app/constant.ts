import { Question } from "./types";

export const RESULT: {
  [key: string]: {
    image: string;
    title: string;
    activity: {
      title: string;
      type: "session" | "event";
    };
  };
} = {
  ENTP: {
    image: "/images/frontend.png",
    title: "프론트엔드 개발자",
    activity: { title: "처음부터 시작하는 웹 프론트 엔드", type: "session" },
  },
  ESFP: {
    image: "/images/mobile.png",
    title: "모바일 앱 개발자",
    activity: {
      title: "리액트 네이티브를 이용한 앱 개발 입문",
      type: "session",
    },
  },
  INTJ: {
    image: "/images/security.png",
    title: "보안 전문가",
    activity: { title: "Pre BOB 맛보기", type: "session" },
  },
  ESTP: {
    image: "/images/security.png",
    title: "보안 전문가",
    activity: { title: "Pre BOB 맛보기", type: "session" },
  },
  ISTJ: {
    image: "/images/data.png",
    title: "데이터 과학자",
    activity: { title: "R 데이터 분석 기초", type: "session" },
  },
  ISFJ: {
    image: "/images/data.png",
    title: "데이터 과학자",
    activity: { title: "R 데이터 분석 기초", type: "session" },
  },
  ENTJ: {
    image: "/images/ai.png",
    title: "인공지능(AI) 개발자",
    activity: { title: "컴퓨터한테 말 가르치는 법", type: "session" },
  },
  INFJ: {
    image: "/images/ai.png",
    title: "인공지능(AI) 개발자",
    activity: { title: "컴퓨터한테 말 가르치는 법", type: "session" },
  },
  ESTJ: {
    image: "/images/network.png",
    title: "네트워크(클라우드) 엔지니어",
    activity: { title: "스프링 부트로 배우는 서버 기초", type: "session" },
  },
  INFP: {
    image: "/images/game.png",
    title: "게임 개발자",
    activity: {
      title: "Unity로 FPS 멀티플레이 좀비 게임 만들기",
      type: "session",
    },
  },
  ISTP: {
    image: "/images/backend.png",
    title: "백엔드 개발자",
    activity: { title: "씹어먹는 백엔드의 세계", type: "session" },
  },
  INTP: {
    image: "/images/backend.png",
    title: "백엔드 개발자",
    activity: { title: "씹어먹는 백엔드의 세계", type: "session" },
  },
  ISFP: {
    image: "/images/designer.png",
    title: "디자이너",
    activity: { title: "영상편집을 위한 영차영차", type: "session" },
  },
  ENFJ: {
    image: "/images/pm.png",
    title: "프로젝트 매니저(PM)",
    activity: { title: "쿠씨톤", type: "event" },
  },
  ESFJ: {
    image: "/images/pm.png",
    title: "프로젝트 매니저(PM)",
    activity: { title: "쿠씨톤", type: "event" },
  },
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
