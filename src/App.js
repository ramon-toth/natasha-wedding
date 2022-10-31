import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import React from "react";
import PublicModule from "./modules/public/PublicModule";
import AdminModule from "./modules/admin/AdminModule";
import Login from "./modules/auth/Login";
import Logout from "./modules/auth/Logout";

function App() {
  return (
    <div className="bg-opacity-0 flex flex-col h-screen ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/*" element={<PublicModule />} />
        <Route path="/admin" element={<AdminModule />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
