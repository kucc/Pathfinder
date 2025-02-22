export type MBTI = "E" | "I" | "S" | "N" | "T" | "F" | "P" | "J";
export type MBTIType = "EI" | "SN" | "TF" | "JP";

export interface Question {
  question: string;
  message?: string;
  options: {
    text: string;
    behavior: Behavior;
  }[];
}

export interface Behavior {
  mbti: MBTI[];
  value: number;
}

export type Result = Record<MBTI, number>;
