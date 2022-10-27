import React from "react";
import AdminAuthGuard from "./AdminAuthGuard";
import RsvpAdmin from "./pages/RsvpAdmin";

function AdminModule() {
  return (
    <>
      <AdminAuthGuard />
      <RsvpAdmin />
    </>
  );
}

export default AdminModule;
