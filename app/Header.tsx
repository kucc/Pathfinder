import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex h-16 w-full max-w-md items-center justify-between px-6">
      <Link href="/" className="font-cute font-bold">
        나에게 맞는 IT 직군은?
      </Link>
      <img src="/mascot.png" className="size-8 shrink-0 object-contain" />
    </header>
  );
}
