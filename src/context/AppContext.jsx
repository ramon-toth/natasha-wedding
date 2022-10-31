import React, { useEffect, useState } from "react";
const AppContext = React.createContext({});

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const checkForUser = () =>
    window.sessionStorage.getItem("token")
      ? setAuth(window.sessionStorage.getItem("token"))
      : setAuth(null);

  useEffect(() => checkForUser(), []);

  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
