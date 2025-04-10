import { useContext } from "react";
import { counterContext } from "../context/context";

const ButtonCounter = () => {
  const { count } = useContext(counterContext);

  return <div>count is {count}</div>;
};

export default ButtonCounter;
