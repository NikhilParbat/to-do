"use client";
import NewToDoForm from "@/lib/components/NewToDoForm";
import ToDoCard from "@/lib/components/ToDoCard";
import ToDoList from "@/lib/components/ToDoList";
import useToDo from "@/lib/hooks/useToDo";
import { useEffect, useState } from "react";

export default function Home() {
  const { getTodos, todos } = useToDo();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="min-h-dvh">
      <h1 className="text-center my-8 text-blue-600 font-bold text-3xl">
        {" "}
        To-Do Application
      </h1>
      <div className=" flex justify-between items-start p-4">
        <ToDoList todos={todos} />
        <NewToDoForm getTodos={getTodos} />
      </div>
    </div>
  );
}
