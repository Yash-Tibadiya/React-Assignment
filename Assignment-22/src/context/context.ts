import { createContext, Dispatch, SetStateAction } from "react";

interface CounterContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const counterContext = createContext<CounterContextType>({
  count: 0,
  setCount: () => {},
});
