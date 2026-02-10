import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-box">
            <h2 className="footer-logo">
              Him<span>Diaries</span>
            </h2>
            <p>
              Discover the beauty, culture, and hidden stories of Himachal.
              Travel slow, travel deep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/District">Districts</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Aboutus">About Us</Link>
          </div>

          {/* Explore */}
          <div className="footer-box">
            <h3>Explore</h3>
            <Link to="/adventure">Adventure</Link>
            <Link to="/Temples">Spiritual</Link>
          </div>

          {/* Contact */}
          <div className="footer-box">
            <h3>Contact</h3>
            <p>Email: himdiaries08@gmail.com</p>
            <p>Location: Himachal Pradesh, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Him Diaries. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
