import React, { createContext, useContext } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: "Borith",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
