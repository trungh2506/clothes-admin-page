import { Link, NavLink } from "react-router-dom";

function SideBarLink({ item }) {
  return (
    <NavLink
      to={item?.path}
      className={({ isActive }) =>
        isActive
          ? "text-white bg-blue-600 text-lg flex items-center gap-2  px-3 py-2 rounded-lg"
          : "text-base text-blue-950 duration-150 hover:text-blue-600 hover:text-lg hover:opacity-100 opacity-35 flex items-center gap-2 hover:bg-blue-200 px-3 py-2 rounded-lg"
      }
    >
      <span>{item?.icon}</span>
      {item?.label}
    </NavLink>
  );
}
export default SideBarLink;
