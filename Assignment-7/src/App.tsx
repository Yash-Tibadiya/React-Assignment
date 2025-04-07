// Event Handling

import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  const handleLog = () => {
    console.log("Hello, I am Yash!");
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(event.target.value);
  };

  return (
    <>
      <div
        className={`flex flex-col w-full h-screen ${
          isHovered ? "bg-black" : "bg-gray-900"
        }`}
      >
        <h1 className="flex text-2xl font-bold justify-center items-center text-white pt-80 pb-8">
          Hello 👋
        </h1>
        <div className="flex gap-8 text-black items-center justify-center">
          <button
            onClick={handleLog}
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 bg-gray-800 hover:bg-gray-700"
          >
            Button 1
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 bg-gray-800 hover:bg-gray-700"
          >
            Button 2
          </button>
        </div>

        <div className="flex flex-col justify-center mt-5">
          <div className="flex items-center justify-center">
            <div className="flex w-sm">
              <label className="text-white pr-3">Enter : </label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="text-white border border-white w-xs"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-white flex w-sm mt-1">
              Name : <span className="pl-3">{name}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-5">
          <div className="flex items-center justify-center">
            <div className="flex w-sm">
              <label className="text-white pr-3">Select : </label>
              <select
                value={payment}
                onChange={handlePaymentChange}
                className="text-white border border-white w-xs"
              >
                <option value="" disabled selected className="bg-gray-700">
                  Select Payment Method
                </option>
                <option value="Visa" className="bg-gray-700">
                  Visa
                </option>
                <option value="Mastercard" className="bg-gray-700">
                  Mastercard
                </option>
                <option value="Google pay" className="bg-gray-700">
                  Google pay
                </option>
                <option value="UPI" className="bg-gray-700">
                  UPI
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white flex w-sm mt-1">
            Payment Method : <span className="pl-3">{payment}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
