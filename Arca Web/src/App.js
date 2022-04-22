import React, { useState } from "react";


import App2 from './App2'
import Login from "./components/Login";
//import Tareas from './pages/Tareas/Tareas';

const App = () => {
  const [log, setLog] = useState(true);
  if (!log) {
    return (
      <div>
        <Login />
      </div>
    );
  }
  return (
    <div>
      <App2 />
    </div>
  );
}

export default App;