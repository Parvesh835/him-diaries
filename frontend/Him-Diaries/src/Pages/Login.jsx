import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setformData] = useState({
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
      <div className="login-page">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Please login to your account</p>

          <form>
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

            <button type="submit">Login</button>
          </form>

          <span>
            Don’t have an account? <Link to="/Signup">Sign up</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
