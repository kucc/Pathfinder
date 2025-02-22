import { CAREER } from "@/app/constant";
import { activityToKorean } from "@/public/utils/toKorean";
import { notFound } from "next/navigation";

export default async function Result({
  params,
}: {
  params: Promise<{ type: keyof typeof CAREER }>;
}) {
  const { type } = await params;
  const result = CAREER[type];

  if (!result) {
    notFound();
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <div className="flex flex-col items-center gap-1">
        {result.emoji}
        <p className="text-center text-sm font-bold text-primary">
          {result.summary}
        </p>
        <h1 className="font-cute text-3xl font-black">{result.title}</h1>
      </div>

      <div className="w-full max-w-64">
        <img src={result.image} alt={result.title} className="object-contain" />
      </div>

      <p className="break-keep rounded-lg bg-base-200 px-4 py-2 text-center leading-relaxed">
        <BoldText text={result.description} />
      </p>

      <div className="flex w-full flex-col items-center">
        <div className="divider font-bold text-primary">
          KUCC에서 진행된 {result.title} 관련 활동
        </div>

        <div className="flex items-center justify-start gap-2 text-center text-sm font-bold">
          <div className="badge badge-primary badge-outline">
            {activityToKorean(result.activity.type)}
          </div>
          {result.activity.title}
        </div>
      </div>
    </div>
  );
}

const BoldText = ({ text }: { text: string }): React.ReactNode => {
  const parts = text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <b key={index}>{part.slice(2, -2)}</b>
      ) : (
        part
      ),
    );

  return <span>{parts}</span>;
};
