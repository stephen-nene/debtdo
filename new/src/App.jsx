import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";


import { Navbar } from './components/Navbar';
import Login from './components/Auth/Login';
import Error404 from './components/Error404';

import './assets/styles/App.css';



function App() {
  // const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="bg-gray-800">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        {/* <Route path="/" element={<Welcome loading={loading} />} /> */}
        {/* <Route path="/debts" element={<HomeDebt />} /> */}
        {/* <Route path="/timebox" element={<HomeBox />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}

        <Route path='/*' element={<Error404 darkMode={darkMode} setDarkMode={setDarkMode}/>} />
      </Routes>

    </div>
  );
}

export default App;
