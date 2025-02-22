import { MBTI } from "@/app/types";

export default function Result({
  params: { type },
}: {
  params: { type: MBTI };
}) {
  return <div>{type}</div>;
}
