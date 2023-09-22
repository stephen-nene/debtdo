import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";


import { Navbar } from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Error404 from './components/pages/Error404';
import Welcome from './components/pages/Welcome';



import './assets/styles/App.css';



function App() {
  // const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="bg-gray-800 text-white h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className="py-[200px]">

      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/debts" element={<HomeDebt />} /> */}
        {/* <Route path="/timebox" element={<HomeBox />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/profile" element={<Profile />} /> */}

        <Route path='/*' element={<Error404 />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
