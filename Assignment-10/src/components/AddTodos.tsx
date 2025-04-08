import { SetStateAction, useState } from "react";
import TodoList from "./TodoList";

const AddTodos = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleTodoInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTodo(event.target.value);
  };

  const handleAddtodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddtodo();
    }
  };

  return (
    <div className="flex flex-col bg-gray-700 w-1/2 rounded-lg ">
      <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
        AddTodos
      </h1>

      <div className="flex justify-center items-center mb-5">
        <label htmlFor="task" className="font-bold text-2xl">
          Task :{" "}
        </label>
        <input
          type="text"
          placeholder="Enter Todo or Task"
          name="email"
          className="p-2 m-4 border-2 rounded-lg w-1/2"
          value={todo}
          onChange={handleTodoInput}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-gray-900 p-2 px-5 rounded-lg"
          onClick={handleAddtodo}
        >
          Add
        </button>
      </div>
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default AddTodos;
