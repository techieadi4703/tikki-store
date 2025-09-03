import React, { createContext } from "react";

export const AuthDataContext = createContext();

const AuthContext = ({ children }) => {
  let serverURL = "http://localhost:8000";
  const value = {serverURL};
  return (
    <div>
      <AuthDataContext.Provider value={value}>
        {children}
      </AuthDataContext.Provider>
    </div>
  );
};

export default AuthContext;
