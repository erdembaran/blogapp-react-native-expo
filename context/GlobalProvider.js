import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
