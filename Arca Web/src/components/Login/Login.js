import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

import arcalogo from './img/arcalogo.png'

export default function Login({ setUser }) {
  //Declaramos los hooks para correo y constraseña
  const [correo, setCorreo] = useState();
  const [contrasenia, setContrasenia] = useState();

  function loginUser(credentials) {
    const url = "http://localhost:3001/users/login";

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
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

  //Esta funcion se encarga de el boton de submit creo :C 
  const handleSubmit = async e => {
    const user = e.preventDefault();
    await loginUser({
      correo,
      contrasenia
    });

  }

  return (
    <div className='bodylogin'>
      <div class="container-sm">
        <div class="container-md">
          <div class="arca">
            <img src={arcalogo} alt="Logo de Arca Continental" />
          </div>
          <p class="inici">Iniciar Sesión</p>
          <form class="hijo" onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Usuario: </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setCorreo(e.target.value)} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña: </label>
              <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setContrasenia(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>

          </form>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};