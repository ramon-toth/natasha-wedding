import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminAuthGuard() {
  const navigate = useNavigate();

  const checkForToken = () => {
    const token = window.sessionStorage.getItem("token");
    !token && navigate("/auth/login");
  };

  useEffect(() => checkForToken());
  return <></>;
}

export default AdminAuthGuard;
