import React, { useState } from "react";


import App2 from './App2'
import Login from "./components/Login/Login";

const App = () => {
  const [token, setToken] = useState(true);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <App2 />
    </div>
  );
}

export default App;