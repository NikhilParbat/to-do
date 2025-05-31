import { POST } from "@/app/api/todos/route";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const useToDo = (): UseTodoState => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodos = async () => {
    const response = await fetch("api/todos");
    const data = await response.json();
    setTodoList(data as Todo[]);
    console.log(data);
  };

  const addTodo = async (todo: Todo) => {
    await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    });
    getTodos();
  };

  return {
    todos: todoList,
    getTodos,
    addTodo,
  };
};

export default useToDo;
