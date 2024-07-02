import React from "react";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/constants/navigation";
import { FaTshirt } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
import SideBarLink from "./SideBarLink";

function SideBar(props) {
  return (
    <div className="bg-gray-100 flex flex-col w-60 p-4 border-r border-gray-300 divide-y">
      <div className="flex items-center gap-2 px-1 py-2">
        <FaTshirt fontSize={30} className="text-blue-600" />
        <span className=" text-lg text-blue-600 text-center">Clothes Shop</span>
      </div>
      <div className="flex flex-1 py-8 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          return <SideBarLink key={item.key} item={item} />;
        })}
      </div>
      <div className="flex flex-col pt-2 border-t">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
          return <SideBarLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
