import { Question } from "@/app/types";
import Option from "./Option";

export default function Step({
  question,
  next,
}: {
  question: Question;
  next: (result: Question["options"][number]["behavior"]) => void;
}) {
  return (
    <div className="flex h-full shrink flex-col items-center justify-between">
      <p className="break-keep text-center text-xl font-bold">
        {question.question}
      </p>

      <div className="flex w-full flex-col gap-4">
        {question.options.map((option, index) => (
          <Option
            key={index}
            text={option.text}
            next={() => next(option.behavior)}
          />
        ))}
      </div>
    </div>
  );
}
