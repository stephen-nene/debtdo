import React from "react";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";
import placeHolder from "../assets/avator.avif";



export const Profile = (props) => {
  const userD = useSelector((state) => state.user.userData);

  // Placeholder URL for profile picture
  const placeholderImgSrc = '../'
  return (
    <div className="-view">
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="text-center mt-3 items-center space-x-4">
          {/* Profile picture */}
          <img
            src={userD.user.profile_pic || placeHolder}
            alt={`${userD.user.username}'s Profile`}
            // className="w-16 h-16 rounded-full"
          />

          {/* User information */}
          <div className=" ">
            <h1 className="text-2xl font-semibold">{userD.user.username}</h1>
            <p className="text-gray-500">{userD.user.email}</p>
          </div>
        </div>

        {/* Additional user information */}
        {/* Replace these placeholders with actual user data */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Additional Information</h2>
          <p>Address: {userD.user.address || "N/A"}</p>
          <p>Phone: {userD.user.phone || "N/A"}</p>
          {/* Add more user information as needed */}
        </div>
      </div>
    </div>
  );
};
