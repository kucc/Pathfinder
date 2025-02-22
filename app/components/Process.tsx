export default function Process({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4">
      <div className="relative h-2 w-full rounded-full bg-base-200">
        <div
          className="absolute left-0 top-0 flex h-full items-center justify-end rounded-full bg-primary transition-[width] duration-300"
          style={{
            width: `${(step / total) * 100}%`,
          }}
        >
          <img
            src="/mascot.png"
            className="size-6 translate-x-1/2 object-contain"
          />
        </div>
      </div>
      <div className="shrink-0 whitespace-nowrap text-xl font-bold text-primary">
        {step + 1} / {total}
      </div>
    </div>
  );
}
