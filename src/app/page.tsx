"use client";
import NewToDoForm from "@/lib/components/NewToDoForm";
import ToDoCard from "@/lib/components/ToDoCard";
import { todos } from "@/lib/data/todo";
import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>(todos);
  const [toDoFormData, setToDoFormData] = useState<Todo>({
    id: 0,
    title: "",
    description: "",
    status: "In-progress",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setToDoFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = () => {
    const newTodo = { ...toDoFormData, id: todoList.length + 1 };
    setTodoList((prev) => [...prev, newTodo]);
    setToDoFormData({
      id: 0,
      title: "",
      description: "",
      status: "In-progress",
    });
  };

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center">
      <NewToDoForm
        formData={toDoFormData}
        onInputChange={handleChange}
        onFormSubmit={onFormSubmit}
      />
      <h1 className="text-blue-700 text-2xl text-center font-semibold">
        To-Do List
      </h1>
      <div className="flex flex-col items-start">
        {todoList.map((todo) => (
          <ToDoCard todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
