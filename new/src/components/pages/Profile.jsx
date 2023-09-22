import React, { useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { AiOutlineEdit } from "react-icons/ai"; // Import the pencil icon
import { useNavigate } from "react-router-dom";

import placeHolder from "../../assets/images/avator.avif";

export const Profile = (props) => {
  const isLoggedIn = useSelector(state => state.user.loggedIn);
  const userD = useSelector((state) => state.user.userData);
  const [secs, setSecs] = useState(5);

  const navigate = useNavigate();


  const handleEditClick = () => {
    // Handle the edit button click
    message.success("Pencil clicked");
  };

  return (
    <div className="-view">
      <div className="container mx-auto mt-8">
        <div className="text-center mt-3 space-x-4">
          {isLoggedIn ? (
            // Logged-in content
            <div className="w-72 bg-rose-300 rounded-lg shadow-lg p-6 mx-auto text-center">
              {/* Profile picture */}
              <img
                src={userD.user.profile_pic || placeHolder}
                alt={`${userD.user.username}'s Profile`}
                className="w-36 h-36 rounded-full mx-auto mb-4"
              />

              {/* User information */}
              <div>
                <h1 className="text-2xl font-semibold">{userD.user.username}</h1>
                <p className="text-gray-500">{userD.user.email}</p>
              </div>

              {/* Edit button with pencil icon */}
              <button
                onClick={handleEditClick}
                className=" bg-gradient-to-r from-rose-900 to-rose-500 text-white rounded-full px-4 py-2 mt-4 hover:from-rose-600 hover:to-rose-700 hover:shadow-md transition duration-300 ease-in-out"
              >
                <AiOutlineEdit className="inline-block text-xl mr-2" />
                Edit Profile
              </button>
            </div>
          ) : (
            // Not logged in content
            <div className="mx-auto mt-8">
              <p className="my-4">You are not logged in</p>
              <p className="mb-4">Redirecting in {secs} seconds ...</p>
              <button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-rose-900 to-rose-500 hover:from-rose-600 hover:to-rose-700 text-white rounded-xl hover:shadow-lg transition duration-300 ease-in-out py-2 px-4"
              >
                Proceed to login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
