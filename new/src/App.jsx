import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";


import { Navbar } from './components/Navbar';
import { Login} from './components/Auth/Login';
import './assets/styles/App.css';

import {addCount,subCount,resetCount} from './store/actions/counterAction'


function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className=" justify- items-center">
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Welcome loading={loading} />} />
        <Route path="/debts" element={<HomeDebt />} />
        <Route path="/timebox" element={<HomeBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='/*' element={<Error404 />} />
      </Routes> */}

aa
    </div>
  );
}

export default App;
