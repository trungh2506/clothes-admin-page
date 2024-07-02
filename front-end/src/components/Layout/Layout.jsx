import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";

function Layout() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header className="sticky top-0 z-10" />
        <div className="flex-1 overflow-auto p-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
