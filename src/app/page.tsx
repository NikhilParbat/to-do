import ToDoCard from "@/lib/components/ToDoCard";
import { todos } from "@/lib/data/todo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center">
      <h1 className="text-blue-700 text-2xl text-center font-semibold">
        To-Do List
      </h1>
      <div className="flex flex-col items-start">
        {todos.map((todo) => (
          <ToDoCard todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
