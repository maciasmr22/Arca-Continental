import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

import arcalogo from './img/arcalogo.png'
import { ApiUrlXD } from '../../const/global';

export default function Login({ setUser }) {
  //Declaramos los hooks para correo y constraseña
  const [correo, setCorreo] = useState();
  const [contrasenia, setContrasenia] = useState();

  function loginUser(credentials) {
    const url = ApiUrlXD + "login";

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
        setUser(json.user[0])

      })

  }

  //Esta funcion se encarga de el boton de submit creo :C 
  const handleSubmit = async e => {
    e.preventDefault();
    loginUser({
      correo,
      contrasenia
    });

  }

  return (
    <div className='bodylogin'>
      <div className="container-sm">
        <div className="container-md">
          <div className="arca">
            <img src={arcalogo} alt="Logo de Arca Continental" />
          </div>
          <p className="inici">Iniciar Sesión</p>
          
          <form className="hijo" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Usuario: </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setCorreo(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña: </label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setContrasenia(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </form>

        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};