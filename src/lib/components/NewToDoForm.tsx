import { todo } from "node:test";
import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import { TODO_VALIDATION } from "../constants/validationConstants";
import useToDo from "../hooks/useToDo";
import { DEFAULT_TODO_VALUES } from "../constants";

interface NewToDoFormProps {
  getTodos: VoidFunction;
}

const NewToDoForm: FC<NewToDoFormProps> = ({ getTodos }) => {
  const { addTodo } = useToDo();
  return (
    <>
      <Formik
        initialValues={DEFAULT_TODO_VALUES}
        validationSchema={TODO_VALIDATION}
        onSubmit={async (values: Todo) => {
          const newTodo = {
            ...values,
            id: parseInt(Date.now().toString()),
          };
          addTodo(newTodo);
          await getTodos();
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md max-w-md w-full flex flex-col mx-8"
          >
            <h2 className="text-xl font-bold text-gray-800">Add a New Todo</h2>
            <label htmlFor="title">Title:</label>
            <input
              name="title"
              placeholder="Enter title here"
              type="text"
              value={values.title}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 my-1"
            />
            {errors.title && touched.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}

            <label htmlFor="description">Description:</label>
            <input
              name="description"
              placeholder="Enter description here"
              type="text"
              value={values.description}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 my-1"
            />
            {errors.description && touched.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition my-1"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewToDoForm;
