import { NavLink } from "react-router-dom";

function NavItem({ children, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
