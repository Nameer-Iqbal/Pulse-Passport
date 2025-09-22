import React, { createContext, useContext, useState, useEffect } from "react";

// Context create
const UserContext = createContext(null);

// Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Richard Wood",
          gender: "Male",
          age: 39,
          bloodGroup: "B+",
        };
  });

  // Save to localStorage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook for using context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
