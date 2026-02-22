import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, User, LogOut, LayoutDashboard, Image, MessageSquare, MapPin ,Code } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/Login");
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src={Logo} alt="Him Diaries Logo" className="logo-img" />
          </Link>
          <Link to="/" className="brand-name">
            Him Diaries
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {(!user || user.role !== "ADMIN") && (
            <>
              <Link to="/" className={`nav-link ${isActive("/")}`}>Home</Link>
              <Link to="/district" className={`nav-link ${isActive("/district")}`}>Districts</Link>
              <Link to="/Gallery" className={`nav-link ${isActive("/Gallery")}`}>Gallery</Link>
              <Link to="/About" className={`nav-link ${isActive("/About")}`}>About</Link>
              <Link to="/Contactus" className={`nav-link ${isActive("/Contactus")}`}>Contact</Link>
              <Link to="/Developer" className={`nav-link ${isActive("/Developer")}`}>Developer</Link>
            </>
          )}

          {user && user.role === "ADMIN" && (
            <>
              <Link to="/admin/dashboard" className={`nav-link ${isActive("/admin/dashboard")}`}>
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link to="/admin/add-district" className={`nav-link ${isActive("/admin/add-district")}`}>
                <MapPin size={18} /> Add District
              </Link>
              <Link to="/admin/add-gallery" className={`nav-link ${isActive("/admin/add-gallery")}`}>
                <Image size={18} /> Add Photo
              </Link>
              <Link to="/admin/messages" className={`nav-link ${isActive("/admin/messages")}`}>
                <MessageSquare size={18} /> Messages
              </Link>
              <Link to="/Developer" className={`nav-link ${isActive("/Developer")}`}> <Code size={18} />Developer</Link>
            </>
          )}
        </nav>

        {/* User Section & Auth Actions */}
        <div className="user-actions">
          {user ? (
            <div className="authenticated-user">
              <div className="user-info">
                <span className="user-name">Hi, {user.firstName || "User"}</span>
                {user.role === "ADMIN" }
              </div>
              <button className="logout-btn" onClick={handleLogout} title="Logout">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/Login" className="login-btn">
              Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        {(!user || user.role !== "ADMIN") && (
          <>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/")}>Home</Link>
            <Link to="/district" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/district")}>Districts</Link>
            <Link to="/Gallery" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/Gallery")}>Gallery</Link>
            <Link to="/About" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/About")}>About</Link>
            <Link to="/Contactus" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/Contactus")}>Contact Us</Link>
          </>
        )}

        {user && user.role === "ADMIN" && (
          <>
            <Link to="/admin/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/admin/dashboard")}>Dashboard</Link>
            <Link to="/admin/add-district" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/admin/add-district")}>Add District</Link>
            <Link to="/admin/add-gallery" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/admin/add-gallery")}>Add Photo</Link>
            <Link to="/admin/messages" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/admin/messages")}>Messages</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
