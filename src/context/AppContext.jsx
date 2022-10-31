import React, { useState } from "react";
const AppContext = React.createContext({});

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(0);

  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
