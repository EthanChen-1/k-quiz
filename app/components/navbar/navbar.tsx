import { Link, NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="flex flex-col gap-4 sm:flex-row max-w-7xl justify-between mx-auto p-4 items-center">
      <Link to="/">
        <img
          src="../../../k-quiz-logo-bright.svg"
          alt="logo of K-Quiz"
          className=""
        />
      </Link>
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active py-2" : "py-2";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active py-2" : "py-2";
            }}
            to="/quiz"
          >
            Find New Groups
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
