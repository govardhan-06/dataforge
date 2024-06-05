import React, { createContext, useState } from 'react';

// Create a Context
const UserContext = createContext();

// Create a Provider component
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [points, setPoints] = useState(0);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, points, setPoints}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
