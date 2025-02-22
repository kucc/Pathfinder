import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-12 pt-24">
      <div className="flex h-full w-full shrink flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-bold">
          존재하지 않는 페이지입니다.
        </h2>
      </div>
      <Link href="/" className="btn btn-primary w-full">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
