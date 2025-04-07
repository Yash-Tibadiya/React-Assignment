import { useState } from "react";

const EnterName = () => {
  const [name, setName] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center mt-5">
      <div className="flex items-center justify-center">
        <div className="flex w-sm">
          <label className="text-white pr-3">Enter : </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="text-white border border-white w-xs pl-1"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white flex w-sm mt-1">
          Name : <span className="pl-3">{name}</span>
        </p>
      </div>
    </div>
  );
};

export default EnterName;
