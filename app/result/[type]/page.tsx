import { MBTI } from "@/app/types";

export default async function Result({
  params,
}: {
  params: Promise<{ type: MBTI }>;
}) {
  const { type } = await params;
  return <div>{type}</div>;
}
