import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

import { CiHome } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <CiHome />,
  },
  {
    key: "products",
    label: "Product",
    path: "/product",
    icon: <HiOutlineCube />,
  },
  {
    key: "users",
    label: "User",
    path: "/user",
    icon: <TiGroup />,
  },
  //   {
  //     key: "orders",
  //     label: "Orders",
  //     path: "/orders",
  //     icon: <HiOutlineShoppingCart />,
  //   },
  //   {
  //     key: "customers",
  //     label: "Customers",
  //     path: "/customers",
  //     icon: <HiOutlineUsers />,
  //   },
  //   {
  //     key: "transactions",
  //     label: "Transactions",
  //     path: "/transactions",
  //     icon: <HiOutlineDocumentText />,
  //   },
  //   {
  //     key: "messages",
  //     label: "Messages",
  //     path: "/messages",
  //     icon: <HiOutlineAnnotation />,
  //   },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
