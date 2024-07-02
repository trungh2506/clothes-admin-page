import React from "react";
import { MdDisabledByDefault } from "react-icons/md";
import { MdOutlineDisabledByDefault } from "react-icons/md";
export default function StatisticCard({ quantity, text, icon: Icon }) {
  return (
    <div className="flex items-center flex-row bg-white justify-between shadow-md p-6">
      <div className="flex items-left flex-col">
        <span className="text-2xl font-semibold">
          {quantity}{" "}
          <span className="text-gray-400 font-normal text-sm">sản phẩm</span>
        </span>
        <span className="text-gray-400 text-lg">{text}</span>
        <span className="text-green-600 text-lg">+1</span>
        {/* <span className="text-red-600 text-lg">-1</span> */}
      </div>
      <div>
        {Icon ? (
          <Icon
            size={50}
            className="bg-blue-100 rounded-full overflow-hidden p-3 text-blue-600"
          />
        ) : (
          <MdOutlineDisabledByDefault
            size={50}
            className="bg-blue-100 rounded-full overflow-hidden p-3 text-blue-600"
          />
        )}
      </div>
    </div>
  );
}
