import MainImage from "./MainImage";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-100">
      <div className="h-64 w-full overflow-hidden px-16">
        <MainImage speed={2} />
      </div>
      <div className="text-center text-2xl font-bold">
        결과를 분석하고 있습니다.
        <br />
        잠시만 기다려주세요.
      </div>
      <div className="loading loading-dots text-primary" />
    </div>
  );
}
