const TodoItem = ({id, task}) => {
  return (
    <div>
      <h2>
        {id} : {task}
      </h2>
    </div>
  );
};

export default TodoItem;