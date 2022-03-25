import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import logo from "../../assets/1.png";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        <img id="nav-logo" src={logo} alt="Tech&Tapas" />
      </Link>

      <div className="nav__authLinks">
        <Link to={PATHS.TECHNEWS} className="authLink">
          Tech News
        </Link>

        <Link to={PATHS.EXPLORE} className="authLink">
          Explore Devs
        </Link>

        <Link to={PATHS.MAPTOMEET} className="authLink">
          Map2Meet
        </Link>

        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Profile
            </Link>

            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
