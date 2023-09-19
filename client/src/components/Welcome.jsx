import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { message } from "antd"


function App() {

  const [loggedin, setLoggedIn] = useState(true);



  return (
    <div className="container">
      <h1 className="">Welcome to Debto's (username) </h1>
      <h3>Where do you wanna go</h3>

      <div className="row">
        <div className=" ">

          <NavLink className="logo vite" to="/debts">

              <span>debts</span>
              <img src="/vite.svg" className="logo vite" alt="Vite logo" />

          </NavLink>

        </div>
        {/* <div className="d"></div> */}
        <NavLink   to="/timebox">


            <span>timebox</span>
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />

        </NavLink>
      </div>


    </div>
  );
}

export default App;
