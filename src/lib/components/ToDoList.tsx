import React, { FC } from "react";
import ToDoCard from "./ToDoCard";

interface ToDoListProps {
  todos: Todo[];
}

const ToDoList: FC<ToDoListProps> = ({ todos }) => {
  return (
    <div className=" flex flex-col mx-8">
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
};

export default ToDoList;
