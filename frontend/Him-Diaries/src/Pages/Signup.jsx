import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

const Signup = () => {
  const [formData, setformData] = useState({
    Full_name: "",
    email: "",
    password: "",
  });

  console.log(formData, "test");

  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="signin-page">
        <div className="signin-card">
          <h2>Create Account</h2>
          <p>Join Him-Dairies and explore Himachal</p>

          <form>
            <input
              type="text"
              name="Full_name"
              placeholder="Full Name"
              onChange={handlechange}
              value={formData.Full_name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handlechange}
              value={formData.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlechange}
              value={formData.password}
            />

            <button type="submit">Sign Up</button>
          </form>

          <span>
            Already have an account? <Link to="/Login">Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
