import { useState } from "react";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth/Auth.jsx";

import "./assets/styles/App.css";

function App() {
  const [loggedin, setLoggedIn] = useState(true);

  return (
    <div className="container">
      {loggedin ? (
        <Welcome />
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
