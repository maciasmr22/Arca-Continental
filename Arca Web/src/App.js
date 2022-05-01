import React, { useState } from "react";


import App2 from './App2'
import Login from "./components/Login/Login";
window.llamadaApi = "llamadaApi"

const App = () => {

  const [user, setUser] = useState();

  if (!user) {
    return (
      <Login setUser={setUser} />
    );
  }

  // Creamos las variables del local storage :)

  localStorage.setItem("correo", user.Correo);
  localStorage.setItem("nombre", user.Nombre);
  localStorage.setItem("planta", user.Planta);
  localStorage.setItem("tipoU", user.Tipo_Usuario);
  localStorage.setItem("usId", user.Usuario_ID);





  return (
    <div>

      <App2 />
    </div>
  );
}

export default App;