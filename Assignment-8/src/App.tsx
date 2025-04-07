// Forms in React

import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });

    // Clear the fields after submit
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Form</h1>

        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="p-2 m-2 border-2 rounded-lg ml-9"
              value={name}
              onChange={handleNameInput}
            />
          </div>

          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="p-2 m-2 border-2 rounded-lg ml-10"
              value={email}
              onChange={handleEmailInput}
            />
          </div>

          <div>
            <label htmlFor="email">Password : </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="p-2 m-2 border-2 rounded-lg ml-3"
              value={password}
              onChange={handlePasswordInput}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 m-6 p-3 rounded-xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
