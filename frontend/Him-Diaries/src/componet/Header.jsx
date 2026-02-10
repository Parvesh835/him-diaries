import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <div className="nav">
          <div className="nav1">
            <Link to="/"> Home </Link>
          </div>
          <div className="nav1">
            <Link to="/district"> Districts </Link>
          </div>
          <div className="nav1">
            <Link to="/Gallery"> Gallery </Link>
          </div>
          <div className="nav1">
            <Link to="/About"> About </Link>
          </div>
          <div className="nav1">
            <Link to="/Contactus"> Contact us </Link>
          </div>
          <div className="nav1">
            <Link to="/Develper"> Developer </Link>
          </div>
          <Link to="/Login">
            {" "}
            <div className="btn">Login</div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
