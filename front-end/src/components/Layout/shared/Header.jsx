import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { Avatar } from "@material-tailwind/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Button,
} from "@headlessui/react";
import { IoPersonOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { SlEnvolopeLetter } from "react-icons/sl";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { FaSignOutAlt } from "react-icons/fa";
import SideBarLink from "./SideBarLink";
import SearchBar from "../../SearchBar";
function Header() {
  return (
    <div className="h-16 p-5 bg-white flex justify-between items-center drop-shadow-lg bg-opacity-50">
      <SearchBar></SearchBar>
      <div className="flex items-center gap-2 mr-2 cursor-pointer">
        <FaBell
          fontSize={25}
          className="text-yellow-400 drop-shadow-md cursor-pointer"
        ></FaBell>

        <Menu>
          <MenuButton className=" inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 text-white shadow-inner shadow-white/10 focus:outline-none">
            <img
              src="https://play-lh.googleusercontent.com/ErldJvx4jIkY9kWN73f_MbxLS4nkxL1fQwJAmHRuAmMITd5p20UUMl59r1CdRMSZ7fei"
              alt=""
              className="rounded-full w-10 h-10 overflow-hidden"
            />
            <span className="text-gray-600">Hàn Quốc Trung</span>
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            transition
            className="origin-top text-gray-500 bg-white flex flex-col text-sm pt-2 pb-2 drop-shadow rounded-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center bg-blue-600 text-white gap-2 p-2"
                    : "flex items-center data-[focus]:bg-blue-100 gap-2 p-2"
                }
                to="profile"
              >
                <IoPersonOutline />
                My profile
              </NavLink>
            </MenuItem>
            <MenuItem className="p-2">
              <Link
                className="flex items-center data-[focus]:bg-blue-100 gap-2 p-2"
                to=""
              >
                <SlEnvolopeLetter /> My account
              </Link>
            </MenuItem>
            <MenuItem className="p-2">
              <Link
                className="flex items-center data-[focus]:bg-blue-100 gap-2 p-2 text-red-600"
                to=""
              >
                <FaSignOutAlt /> Sign out
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
