import Link from "next/link";
import MainImage from "./components/MainImage";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4 px-12 pb-8 pt-32">
      <div className="flex h-full w-full flex-col items-center gap-8 overflow-hidden">
        <h1 className="font-cute flex flex-col items-center text-center text-3xl font-bold">
          나에게 맞는
          <div className="text-4xl">
            <strong className="border-b-4 border-b-primary">IT 직군</strong>
            은?
          </div>
        </h1>
        <MainImage />
      </div>
      <Link href="/test" className="btn btn-primary w-full">
        시작하기
      </Link>
    </div>
  );
}
