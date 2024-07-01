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
function Header() {
  return (
    <div className="h-20 p-5 bg-white flex justify-between items-center drop-shadow">
      <div className="relative">
        <CiSearch
          className="absolute top-0.5 translate-y-1.5 left-2"
          fontSize={25}
        />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="active:outline-none h-10 w-[24rem] pl-11 px-4"
        />
      </div>
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
              className="rounded-full w-12 h-12 overflow-hidden"
            />
            <span className="text-gray-600">Hàn Quốc Trung</span>
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            transition
            className="origin-top text-gray-500 font-light bg-white flex flex-col text-base p-4 drop-shadow rounded-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem className="p-1 rounded-md">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center bg-blue-600 text-white  gap-2 p-2"
                    : "flex items-center data-[focus]:bg-blue-100 gap-2 p-2"
                }
                to="profile"
              >
                <IoPersonOutline />
                My profile
              </NavLink>
            </MenuItem>
            <MenuItem className="p-1 rounded-md">
              <Link
                className="flex items-center data-[focus]:bg-blue-100 gap-2 p-2"
                to=""
              >
                <SlEnvolopeLetter /> My account
              </Link>
            </MenuItem>
            <MenuItem className="flex justify-center items-center mt-3">
              <Button className="text-blue-600 border rounded-md hover:border-blue-600">
                Logout
              </Button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
