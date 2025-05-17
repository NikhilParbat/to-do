import { todo } from "node:test";
import React, { FC } from "react";

interface NewToDoFormProps {
  formData: Todo;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onFormSubmit: VoidFunction;
}

const NewToDoForm: FC<NewToDoFormProps> = ({
  formData,
  onInputChange,
  onFormSubmit,
}) => {
  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          onFormSubmit();
        }}
        className="bg-white p-6 rounded-xl shadow-md max-w-md w-full flex flex-col"
      >
        <h2 className="text-xl font-bold text-gray-800">Add a New Todo</h2>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          placeholder="Enter title here"
          type="text"
          value={formData.title}
          onChange={onInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 my-1"
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          placeholder="Enter description here here"
          type="text"
          value={formData.description}
          onChange={onInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 my-1"
        ></input>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition my-1"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default NewToDoForm;
