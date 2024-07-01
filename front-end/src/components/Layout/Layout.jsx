import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";

function Layout() {
  return (
    <div className="h-screen w-screen flex flex-row overflow-hidden">
      <SideBar></SideBar>
      <div className="flex-1 bg-gray-100">
        <Header></Header>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
