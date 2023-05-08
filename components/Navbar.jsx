import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <a>Home</a>
      </NavLink>
      <NavLink to="/books">
        <a>Books</a>
      </NavLink>
      <NavLink to="/profile">
        <a>Profile</a>
      </NavLink>
    </nav>
  );
};

export default Navbar;
