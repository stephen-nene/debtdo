import React, { useState } from "react";
import { message } from "antd";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



import {handleServerLogin} from "../ServerCom"

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const { email, password } = formData;
    if (email.trim() === "" || password.trim() === "") {
      message.error("Please fill in all fields.");
    } else {
      handleServerLogin(dispatch,formData, navigate)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={`border rounded-md px-3 py-2 w-64 focus:outline-none ${formData.email.trim() === "" ? "border-rose-500" : ""
            }`}
        />
      </div>
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className={`border rounded-md px-3 py-2 w-64 focus:outline-none ${formData.password.trim() === "" ? "border-rose-500" : ""
            }`}
        />
        <span
          className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none cursor-pointer"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-yellow-500" />
          ) : (
            <AiFillEye className="text-yellow-500" />
          )}
        </span>
      </div>
      <button
        className="bg-blue-800  hover:border-blue-300 text-white py-2 px-4 rounded-md mb-4"
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="text-sm">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>
      <div className="text-sm mt-2">
        Not yet a user?{" "}

        <NavLink to="/signup" className="text-blue-500 hover:underline">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}
