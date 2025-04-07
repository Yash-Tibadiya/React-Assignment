// Props

import List from "./components/List";
import Todo from "./components/Todo/Todo";

const titles = ["Eat", "Code", "Sleep", "Repeat"];

const myTodos = [
  {
    id: 1,
    task: "complete react project",
  },
  {
    id: 2,
    task: "cook food",
  },
  {
    id: 3,
    task: "Buy Milk",
  },
];

function App() {
  return (
    <>
      <div>
        {/* <List title="Eat" />
        <List title="Code" />
        <List title="Sleep" />
        <List title="Repeat" /> */}
      </div>

      <div>
        {titles.map((title) => (
          <List title={title} key={title} />
        ))}
      </div>

      <div>
        <Todo items={myTodos} />
      </div>
    </>
  );
}

export default App;
