export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-4 px-12 pb-8 pt-32">
      <div className="flex h-full flex-col items-center gap-8">
        <h1 className="font-cute flex flex-col items-center text-center text-3xl font-bold">
          나에게 맞는
          <div className="text-4xl">
            <strong className="border-b-4 border-b-primary">IT 직군</strong>
            은?
          </div>
        </h1>
        <img className="size-64 object-contain" src="/mascot.png" />
      </div>
      <button className="btn btn-primary w-full">시작하기</button>
    </div>
  );
}
