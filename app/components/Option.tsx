export default function Option({
  text,
  next,
}: {
  text: string;
  next: () => void;
}) {
  return (
    <button className="btn btn-primary w-full" onClick={next}>
      {text}
    </button>
  );
}
