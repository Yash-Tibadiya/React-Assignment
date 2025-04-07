// Props

import List from "./components/List";

const titles = ["Eat", "Code", "Sleep", "Repeat"];

function App() {
  return (
    <>
      {/* <List title="Eat" />
      <List title="Code" />
      <List title="Sleep" />
      <List title="Repeat" /> */}

      {titles.map((title) => (
        <List title={title} />
      ))}
    </>
  );
}

export default App;
