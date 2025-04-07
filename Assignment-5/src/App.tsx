// PropTypes

import Users from "./components/Users/Users";
import UserData from "./Data/UserData.json";

function App() {
  return (
    <>
      <Users users={UserData} />
    </>
  );
}

export default App;
