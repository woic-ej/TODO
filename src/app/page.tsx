import CheckList from "./_components/check-list/CheckList";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <CheckList todo="강아지 목욕" />
    </div>
  );
}
