import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FcDebt, FcTimeline } from 'react-icons/fc';

function Welcome() {
  const [loggedin, setLoggedIn] = useState(true);

  return (
    <div className="container text-center justify-center my-14">
      <h1 className="">Welcome to Debto's (username) </h1>
      <h3>Where do you wanna go</h3>

      <div className="flex justify-center align-center gap-4 my-9">
        <div className="p-2 border border-transparent hover:border-yellow-500 rounded-xl hover:shadow-lg transition duration-300 ease-in-out">
          <NavLink to="/debts">
            <FcDebt className="text-4xl" />
            <span className="text-lg">Debts</span>
          </NavLink>
        </div>
        <div className="p-2 border border-transparent hover:border-yellow-500 rounded-xl hover:shadow-lg transition duration-300 ease-in-out">
          <NavLink to="/timebox">
            <FcTimeline className="text-4xl" />
            <span className="text-lg">Timebox</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
