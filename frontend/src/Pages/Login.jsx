import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signin } from "../service/authApi";
import useMutation from "../hooks/useMutation";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signin);

  const handlechange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutate(formData);
      if (response) {
        toast.success(response.message || "Login Successful");
        login(response.data, response.token);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message || "Login Failed");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Please login to your account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handlechange}
              value={formData.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlechange}
              value={formData.password}
              required
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
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
