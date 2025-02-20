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
    image: "/images/ENTP.png",
    title: "프론트엔드 개발자",
    activity: { title: "처음부터 시작하는 웹 프론트 엔드", type: "session" },
  },
  ESFP: {
    image: "/images/ESFP.png",
    title: "모바일 앱 개발자",
    activity: {
      title: "리액트 네이티브를 이용한 앱 개발 입문",
      type: "session",
    },
  },
  INTJ: {
    image: "/images/INTJ.png",
    title: "보안 전문가",
    activity: { title: "Pre BOB 맛보기", type: "session" },
  },
  ESTP: {
    image: "/images/ESTP.png",
    title: "보안 전문가",
    activity: { title: "Pre BOB 맛보기", type: "session" },
  },
  ISTJ: {
    image: "/images/ISTJ.png",
    title: "데이터 과학자",
    activity: { title: "R 데이터 분석 기초", type: "session" },
  },
  ISFJ: {
    image: "/images/ISFJ.png",
    title: "데이터 과학자",
    activity: { title: "R 데이터 분석 기초", type: "session" },
  },
  ENTJ: {
    image: "/images/ENTJ.png",
    title: "인공지능(AI) 개발자",
    activity: { title: "컴퓨터한테 말 가르치는 법", type: "session" },
  },
  INFJ: {
    image: "/images/INFJ.png",
    title: "인공지능(AI) 개발자",
    activity: { title: "컴퓨터한테 말 가르치는 법", type: "session" },
  },
  ESTJ: {
    image: "/images/ESTJ.png",
    title: "네트워크(클라우드) 엔지니어",
    activity: { title: "스프링 부트로 배우는 서버 기초", type: "session" },
  },
  INFP: {
    image: "/images/INFP.png",
    title: "게임 개발자",
    activity: {
      title: "Unity로 FPS 멀티플레이 좀비 게임 만들기",
      type: "session",
    },
  },
  ISTP: {
    image: "/images/ISTP.png",
    title: "백엔드 개발자",
    activity: { title: "씹어먹는 백엔드의 세계", type: "session" },
  },
  INTP: {
    image: "/images/INTP.png",
    title: "백엔드 개발자",
    activity: { title: "씹어먹는 백엔드의 세계", type: "session" },
  },
  ISFP: {
    image: "/images/ISFP.png",
    title: "디자이너",
    activity: { title: "영상편집을 위한 영차영차", type: "session" },
  },
  ENFJ: {
    image: "/images/ENFJ.png",
    title: "프로젝트 매니저(PM)",
    activity: { title: "쿠씨톤", type: "event" },
  },
  ESFJ: {
    image: "/images/ESFJ.png",
    title: "프로젝트 매니저(PM)",
    activity: { title: "쿠씨톤", type: "event" },
  },
};
