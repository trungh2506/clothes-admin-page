import React from "react";
import { CiSearch } from "react-icons/ci";
export default function SearchBar() {
  return (
    <div className="relative">
      <CiSearch
        className="absolute top-0.5 translate-y-1.5 left-2"
        fontSize={25}
      />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="active:outline-none focus:outline-none rounded-md h-10 w-[24rem] pl-11 px-4 focus:outline-slate-700"
      />
    </div>
  );
}
