import React from "react";
import StatisticCard from "./StatisticCard";
import { AiOutlineProduct } from "react-icons/ai";

const statistics = [
  {
    id: 1,
    text: "Tổng sản phẩm",
    quantity: 100,
    icon: AiOutlineProduct,
  },
  {
    id: 2,
    text: "Bé trai",
    quantity: 20,
    icon: AiOutlineProduct,
  },
  {
    id: 3,
    text: "Bé gái",
    quantity: 70,
    icon: AiOutlineProduct,
  },
  {
    id: 4,
    text: "Phụ kiện",
    quantity: 10,
    icon: AiOutlineProduct,
  },
];

export default function StatisticGrid() {
  return (
    <div className="grid grid-cols-2 gap-1">
      {statistics.map((item) => {
        return (
          <StatisticCard
            key={item.id}
            text={item.text}
            quantity={item.quantity}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}
