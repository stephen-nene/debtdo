import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



import Welcome from "./components/Welcome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { HomeBox } from "./components/timebox/HomeBox";
import { HomeDebt } from "./components/debts/HomeDebts";
import Error404 from './components/Error404.jsx';

import "./assets/styles/App.css";
import { message } from "antd";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.loggedIn); // Access the loggedIn state from Redux
  const userD = useSelector(state => state.user.userData);


console.log(isLoggedIn,userD)

  // useEffect(() => {
  //   fetch('https://mnetimall.onrender.com/me',{
  //     credentials: 'include'
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data) {
  //         // Dispatch the 'LOGIN' action with user data here if needed
  //       } else {
  //         // Dispatch the 'LOGOUT' action here if needed
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/debts" element={<HomeDebt />} />
        <Route path="/timebox" element={<HomeBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
