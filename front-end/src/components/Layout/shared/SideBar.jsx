import React from "react";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/constants/navigation";
import { Link, NavLink } from "react-router-dom";
import { FcBullish } from "react-icons/fc";

function SidebarLink({ item }) {
  return (
    <NavLink
      to={item?.path}
      className={({ isActive }) =>
        isActive
          ? "text-white bg-blue-600 text-lg flex items-center gap-2  px-3 py-2 rounded-lg"
          : "text-lg text-blue-950 hover:text-blue-600 hover:opacity-100 opacity-35 flex items-center gap-2 hover:bg-blue-200 px-3 py-2 rounded-lg"
      }
    >
      <span>{item?.icon}</span>
      {item?.label}
    </NavLink>
  );
}

function SideBar(props) {
  return (
    <div className="bg-gray-100 flex flex-col w-60 p-3 border-r border-gray-300">
      <div className="flex items-center gap-2 px-1 py-3 ">
        <FcBullish fontSize={24} />
        <span className=" text-lg text-black text-center">Clothes Shop</span>
      </div>
      <div className="flex flex-1 py-8 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
      <div className="flex flex-col pt-2 border-t">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
