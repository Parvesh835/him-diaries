import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { signup } from "../service/authApi";
import useMutation from "../hooks/useMutation";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signup);

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
        toast.success(response.message || "Signup Successful. Please Login");
        navigate("/Login");
      }
    } catch (err) {
      toast.error(err.message || "Signup Failed");
    }
  };

  return (
    <>
      <div className="signin-page">
        <div className="signin-card">
          <h2>Create Account</h2>
          <p>Join Him-Dairies and explore Himachal</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handlechange}
              value={formData.firstName}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handlechange}
              value={formData.lastName}
              required
            />
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
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
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
