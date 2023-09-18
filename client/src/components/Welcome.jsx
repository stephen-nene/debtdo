import { useState } from "react";
import {message} from "antd"


function App() {



  return (
    <div className="container">
      <h1 className="text-green-200">Welcome to Debto's (username) </h1>
      <h3>Where do you wanna go</h3>

      <div className="row">
        <div className="border border-red-300 bg-green-200 ">

        <a className="logo vite" onClick={()=>message.info("open debts here")} target="_blank">
          <span>debts</span>
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        </div>
        <div className="d"></div>
        <a onClick={()=>message.info("open timeBox here")} target="_blank">
          <span>timebox</span>
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
      </div>


    </div>
  );
}

export default App;
