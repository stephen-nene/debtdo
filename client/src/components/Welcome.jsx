import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FcDebt, FcTimeline } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import {Navbar} from './Navbar';



function Welcome({loading}) {
  const isLoggedIn = useSelector(state => state.user.loggedIn);
  const userD = useSelector(state => state.user.userData);
  const navigate = useNavigate();
  const [secs , setSecs] = useState(5);

  useEffect(() => {
    const timer = setInterval(()=>{
      if(secs > 0){
        setSecs(secs - 1)
      }else{
        clearInterval(timer)
      }}
    ,1000)
    return () => {
      clearInterval(timer)    
    }
  },[secs])


  return (
    <>
      <div className="container text-center justify-center ">
        {loading ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <ClipLoader color="#36d7b7" size={55} speedMultiplier={0.7} />
              <p className="text-lg font-medium mt-4">Please wait as we log you in...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few seconds.</p>
            </div>
          </>
        ) : !isLoggedIn ? (
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
          
          <Navbar/>
          <h1 className="mt-9">Welcome to Debto's 
          <span className="uppercase  text-yellow-500 font-bold text-xl ml-2 mr-2 
          "> {userD ? userD.user.username : ''}</span>
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


