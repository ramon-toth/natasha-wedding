import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AppContext);

  useEffect(() => {
    window.sessionStorage.removeItem("token");
    setAuth(null);
    navigate("/");
  });
  return <></>;
}

export default Logout;
