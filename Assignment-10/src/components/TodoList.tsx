import React from "react";

interface TodoListProps {
  todos: string[];
  handleRemoveTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleRemoveTodo }) => {
  return (
    <>
      <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
        All Todos
      </h1>
      <ul className="flex flex-col justify-center m-2 mx-6 px-6">
        {todos.map((todoItem: string, index: number) => (
          <li
            className="bg-gray-800 rounded-xl text-lg font-medium m-2 p-4 flex flex-row justify-between"
            key={index}
          >
            <span>{todoItem}</span>
            <button
              className="bg-red-600 text-white p-1 rounded-lg"
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
