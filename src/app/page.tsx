import DetailTodoItem from "./_components/check-list/DetailTodoItem";
import TodoItem from "./_components/check-list/TodoItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <TodoItem todo="강아지 목욕" />
      <DetailTodoItem todo="강아지 목욕" />
    </div>
  );
}
