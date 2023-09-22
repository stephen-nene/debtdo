import React, { useState } from "react";
import { message } from "antd";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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

  const handleSignup = () => {
    const { email, username, password, confirmPassword } = formData;
    if (email.trim() === "" || username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      message.error("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      message.error("Passwords do not match.");
    } else {
      message.success(`Signed up as ${email}`);
    }
  };

  return (
    <div className="px-[50px]  flex flex-col items-center text-center ">
      
      <div className="bg-rose-700 rounded-lg shadow-lg p-8 w-[350px]">
        <h2 className="text-2xl font-semibold mb-4 font-croissant">Sign-Up</h2>


      <div className="text-black">

        <div className="mb-4">
          <input
            // type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className={`border rounded-md px-3 py-2 w-64 focus:outline-none ${formData.username.trim() === "" ? "border-rose-500" : ""
              }`}
          />
        </div>
        <div className="mb-4">
          <input
            // type="email"
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
            className="absolute right-9 top-1/2 transform -translate-y-1/2 focus:outline-none cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20}  className="text-yellow-500" />
            ) : (
              <AiFillEye size={20} className="text-yellow-500" />
            )}
          </span>
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className={`border rounded-md px-3 py-2 w-64 focus:outline-none ${formData.confirmPassword.trim() === "" ? "border-rose-500" : ""
              }`}
          />
          <span
            className="absolute right-9 top-1/2 transform -translate-y-1/2 focus:outline-none cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20} className="text-yellow-500 " />
            ) : (
              <AiFillEye size={20} className="text-yellow-500" />
            )}
          </span>
        </div>
      </div>

      <button
        className="bg-blue-800  hover:border-blue-300 text-white py-2 px-4 rounded-md mb-4"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <div className="text-sm mt-2">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-900 text-lg hover:underline">
          Log in
        </NavLink>
      </div>
      </div>
    </div>
  );
}
