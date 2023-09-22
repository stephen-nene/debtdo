import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FcDebt, FcTimeline } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';





function Welcome({ loading }) {
  const isLoggedIn = useSelector(state => state.user.loggedIn);
  const user = useSelector(state => state.user.userData);
  const navigate = useNavigate();
  const [secs, setSecs] = useState(5);



  return (
    <>
      <div className=" container text-center justify-center ">
        {!isLoggedIn ? (
          <>
            <p className="mb-4">Could not automatically log you in</p>

            <p className="mb-4">Redirecting in {secs} seconds ... </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-yellow-500 text-black hover:text-blue-900 rounded-xl hover:shadow-lg transition duration-300 ease-in-out"
            >Proceed to login</button>
          </>
        ) : (
          <>

            <h1 className="mt-9">Welcome to Debto's
              <span className="uppercase  text-yellow-500 font-bold text-xl ml-2 mr-2 
          "> {user ? user.user.username : ''}</span>
            </h1>
            <h3 className="mt-4">Where do you wanna go</h3>

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
          </>
        )}
      </div>
    </>
  );
}

export default Welcome;


