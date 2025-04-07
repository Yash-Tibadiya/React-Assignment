import TodoItem from "./TodoItem/TodoItem";

const Todo = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} id={item.id} task={item.task} />
      ))}
    </div>
  );
};

export default Todo;
