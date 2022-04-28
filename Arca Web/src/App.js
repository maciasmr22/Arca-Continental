import React, { useState } from "react";


import App2 from './App2'
import Login from "./components/Login/Login";

const App = () => {

  const [user, setUser] = useState();
  console.log("pene: " + user)

  if (!user) {
    return (
      <Login setUser={setUser} />
    );
  }


  return (
    <div>

      <App2 />
    </div>
    );
  }

  export default App;