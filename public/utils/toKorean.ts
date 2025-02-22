export const activityToKorean = (activity: string) => {
  switch (activity) {
    case "session":
      return "세션";
    case "event":
      return "행사";
  }
};
