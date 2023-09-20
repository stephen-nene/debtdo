import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = (props) => {
  const userD = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  return (
    <div className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left-aligned buttons */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            exact
            activeClassName="text-yellow-500"
            className="text-white text-xl hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/debts"
            activeClassName="text-yellow-500"
            className="text-white text-xl hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Debts
          </NavLink>
          <NavLink
            to="/timebox"
            activeClassName="text-yellow-500"
            className="text-white text-xl hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Timebox
          </NavLink>
        </div>

        {/* User information */}
        <div className="text-white">
          {userD ? (
            <NavLink
              to="/profile"
              activeClassName="text-yellow-500"
              className="text-xl hover:text-gray-900 transition duration-300 ease-in-out "
            >
              {userD.user.username}
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};
