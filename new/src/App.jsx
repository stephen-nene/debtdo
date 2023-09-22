import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route,useNavigate } from "react-router-dom";


import { Navbar } from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Error404 from './components/pages/Error404';
import Welcome from './components/pages/Welcome';
import {Profile} from './components/pages/Profile';



import './assets/styles/App.css';




function App() {
  const darkMode = useSelector(state => state.app.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [darkMode, setDarkMode] = useState(false)



  return (
    <div className={`${darkMode? 'bg-gray-800':'bg-gray-600'} text-white h-screen`}>
      <Navbar />

      <div className="py-[200px]">

      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/debts" element={<HomeDebt />} /> */}
        {/* <Route path="/timebox" element={<HomeBox />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='/*' element={<Error404 />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
