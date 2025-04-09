// useCallback - it is used to memoize a function itself to avoid re-creating it unless dependencies change.

import "./App.css";
import { useState, useCallback } from "react";
import { shuffle } from "./utils";
import Search from "./Search";

const allUsers = ["yash", "rohit", "meet", "aman", "ravi"];

function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    // []
    [users]
  );

  return (
    <div className="card">
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <ol>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

