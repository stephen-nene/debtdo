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
        <div className="top font-croissant">
          <h1 className="text-4xl font-bold text-rose-500">Welcome to DebTodo
          </h1>
          {user ? (
            <span className="uppercase text-yellow-500 font-bold text-xl ml-2 mr-2">
              {user.user.username}
            </span>
          ) : null}

        </div>
        {!isLoggedIn ? (
          <>
            <p className="my-4">You are not logged in</p>

            <p className="mb-4">Redirecting in {secs} seconds ... </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-rose-900 to-rose-500 hover:from-rose-600 hover:to-rose-700 text-white rounded-xl hover:shadow-lg transition duration-300 ease-in-out py-2 px-4"
            >
              Proceed to login
            </button>

          </>
        ) : (
          <>

            <h3 className="mt-4">Where do you wanna go</h3>

            <div className="flex justify-center align-center gap-4 my-9">
              <div className="p-2 bg-gradient-to-r from-rose-900 to-rose-500 hover:from-rose-600 hover:to-rose-700  rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <NavLink to="/debts" className="flex items-center p-2 space-x-2">
                  <FcDebt className="text-4xl text-white" />
                  <span className="text-lg text-white">Debts</span>
                </NavLink>
              </div>
              <div className="p-2 bg-gradient-to-r from-rose-500 to-rose-900 hover:from-rose-900 hover:to-rose-500 rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                <NavLink to="/timebox" className="flex items-center p-2 space-x-2">
                  <FcTimeline className="text-4xl text-white" />
                  <span className="text-lg text-white">Timebox</span>
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


