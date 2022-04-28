import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';



export default function Login({ setUser }) {
  {/* declaramos los hooks para correo y constraseña */ }
  const [correo, setCorreo] = useState();
  const [contrasenia, setContrasenia] = useState();

  async function loginUser (credentials) {
    const url = "http://localhost:3001/users/login";
    
    const options = {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(credentials)
    }

    fetch(url, options)
    .then((resp) => {
      return resp.json()
      
    })
    .then((json) => {
      console.log(json.user[0])
      setUser(json.user[0])
    
    })

  }

  {/* esta funcion se encarga de el boton de submit creo :C */ }
  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      correo,
      contrasenia
    });
    
  }

  return (
    <div className="login-wrapper">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Correo</p>
          <input type="text" onChange={e => setCorreo(e.target.value)} />
        </label>

        <label>
          <p>Contraseña</p>
          <input type="password" onChange={e => setContrasenia(e.target.value)} />
        </label>

        <div>
          <button type="submit">login</button>
        </div>

      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};