import React, { FC } from "react";
interface ToDoCardProps {
  todo: Todo;
}

const ToDoCard: FC<ToDoCardProps> = ({ todo }) => {
  const statusColor =
    todo.status === "Done"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div className="rounded-2xl shadow-md p-5 m-3 w-100 bg-white hover:scale-105 transition-transorm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-800 text-nowrap">
          {todo.title}
        </h2>
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${statusColor} text-nowrap`}
        >
          {todo.status}
        </span>
      </div>
      <p className="text-gray-500 text-sm">Task ID: {todo.id}</p>
    </div>
  );
};

export default ToDoCard;
