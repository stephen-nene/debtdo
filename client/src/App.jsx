import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { message } from "antd";



import Welcome from "./components/Welcome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { HomeBox } from "./components/timebox/HomeBox";
import { HomeDebt } from "./components/debts/HomeDebts";
import Error404 from './components/utils/Error404.jsx';
import { Profile } from "./components/Profile";

import { handleGetCurrentUser } from "./components/ServerCom";

import "./assets/styles/App.css";

function App() {
  const isLoggedIn = useSelector(state => state.user.loggedIn);
  const userD = useSelector(state => state.user.userData);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   async function fetchData() {
  //     setLoading(true)
  //     try {
  //       await handleGetCurrentUser(dispatch, navigate);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setLoading(false);
  //     }
  //   }
  //   if (!isMounted.current && userD === null && !isLoggedIn) {

  //     fetchData();
  //     isMounted.current = true;
  //   }


  // }, [navigate, userD]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome loading={loading} />} />
        <Route path="/debts" element={<HomeDebt />} />
        <Route path="/timebox" element={<HomeBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
