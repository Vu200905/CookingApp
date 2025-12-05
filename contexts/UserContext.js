import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}
