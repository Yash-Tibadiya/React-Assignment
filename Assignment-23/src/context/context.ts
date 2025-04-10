import { createContext, useContext } from "react";
import { IUser } from "../App";

export const UserContext = createContext<IUser | undefined>(undefined);

export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("useUserContext must be used with a UserContext");
  }

  return user;
}
