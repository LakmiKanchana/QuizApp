import React, { createContext, useState, useContext } from 'react';

// Create a Context for User Information
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    academicYear: '',
    email: '',
  });

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUser = () => {
  return useContext(UserContext);
};
