import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to="/" className="brand-logo">
          Todo
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/Login">LogIn</Link>
          </li>
          <li>
            <Link to="/Signup">SignUp</Link>
          </li>
          <li>
            <button className="btn red">LogOut</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
