import React from "react";
import AdminAuthGuard from "./AdminAuthGuard";
import RsvpAdmin from "./pages/RsvpAdmin";

function AdminModule() {
  return (
      <div className={`flex-grow bg-image `}>
      <AdminAuthGuard />
      <RsvpAdmin />
      </div>
  );
}

export default AdminModule;
