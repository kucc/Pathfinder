"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Process from "../components/Process";
import Step from "../components/Step";
import { QUESTION, RESULT } from "../constant";
import { Behavior, Result } from "../types";

export default function Test() {
  const [step, setStep] = useState(0);
  const [behaviors, setBehaviors] = useState<Behavior[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const calculateResult = useCallback((result: Result): string => {
    const EI = result.E > result.I ? "E" : "I";
    const SN = result.N > result.S ? "N" : "S";
    const TF = result.F > result.T ? "F" : "T";
    const JP = result.J > result.P ? "J" : "P";

    return `${EI}${SN}${TF}${JP}`;
  }, []);

  const handleLoading = useCallback(() => {
    setLoading(true);
    const goToResult = () => {
      const result = behaviors.reduce(
        (acc, curr) => {
          curr.mbti.forEach((mbti) => {
            acc[mbti] = (acc[mbti] ?? 0) + curr.value;
          });
          return acc;
        },
        {
          E: 0,
          I: 0,
          S: 0,
          N: 0,
          T: 0,
          F: 0,
          P: 0,
          J: 0,
        } as Result,
      );
      const type = calculateResult(result);
      router.push(`/result/${RESULT[type]}`);
    };

    setTimeout(goToResult, 3000);
  }, [behaviors, calculateResult, router]);

  const handleNext = useCallback(
    (behavior: Behavior) => {
      setBehaviors((prev) => [...prev, behavior]);

      if (step < QUESTION.length - 1) {
        setStep((step) => step + 1);
      } else {
        handleLoading();
      }
    },
    [handleLoading, step],
  );

  const back = useCallback(() => {
    if (step === 0) return;
    setStep((step) => step - 1);
    setBehaviors((prev) => prev.slice(0, -1));
  }, [step]);

  useEffect(() => {
    const backEvent = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        back();
      }
    };
    window.addEventListener("keydown", backEvent);
    return () => {
      window.removeEventListener("keydown", backEvent);
    };
  }, [back]);

  return (
    <div className="relative flex h-full w-full flex-col items-center gap-4 pb-8 pt-20">
      <Process step={step} total={QUESTION.length} back={back} />
      <div className="h-full w-full px-8">
        <Step question={QUESTION[step]} next={handleNext} />
      </div>

      {loading && <Loading />}
    </div>
  );
}
