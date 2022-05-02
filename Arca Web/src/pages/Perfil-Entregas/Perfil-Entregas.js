import React, { useEffect, useState } from 'react'
import EntregasSuper from '../../components/EntregasSuper/EntregasSuper';
import { ApiUrlXD } from '../../const/global';

import "./Perfil-Entregas.css"



function Perfil_Entregas() {
  const idU = localStorage.getItem("usId");
  const [newImg, setNewImg] = useState("");
  const [imagen, setImagen] = useState("");
  const [show, setShow] = useState(false);
  // "https://drive.google.com/uc?export=view&id=" + XD

  useEffect(() => {
    
    fetch(ApiUrlXD + `imgPerfil/${idU}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((json) => {
        setImagen(json.users[0].Imagen)
      })

  }, [])

  function cambiarImagen(credentials) {
    
    const url = ApiUrlXD + "cambiarImg";
    const options = {
      method: 'PUT',
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
        console.log(json)
      })
    

  }

  const handleSubmit = async e => {
    e.preventDefault();
    setImagen(newImg);
    cambiarImagen({
      idU,
      newImg
    });

    setShow(!show);

  }


  return (

    <div className="list-groupentrepadre">
      <div className="perfilcontent">
        <div className="about-cont">
          <img src={"https://drive.google.com/uc?export=view&id=" + imagen.slice(32).slice(0, -17)} className="img-Perfil-e" alt='Foto de perfil' onClick={() => {
            setShow(!show);
          }}></img>

        </div>




        {show ? (
          <form onSubmit={handleSubmit}>
            <p>
              Sube tu foto de perfil a drive, dale click <br />
              dereho a tu imagen y haz clic obtener enlace,<br />
              copia el link, pegalo en el cuadro de texto.<br />
              *IMPORTANTE* <br />
              si aparece "restringido" cambiar a <br /> "cualquier persona
              que tenga el vincu lo".
              <br />
              Por ultimo presiona "subir"
            </p>

            <label htmlFor='imgURL'>Url de tu imagen</label> <br />
            <input type="url" id="imgURL" onChange={e => setNewImg(e.target.value)}></input>

            <button type="submit">subir</button>
          </form>

        ) : <div></div>}


        <div className="about-tex">

          <p>Nombre: {localStorage.getItem("nombre")}</p>
          <p>Planta: {localStorage.getItem("planta")}</p>
          <p>Correo: {localStorage.getItem("correo")}</p>

        </div>
        <div className="progress-element">
          <p className="progress-label">JI</p>
          <div className="progress-container-1">
            <progress max="100" value="75">75%</progress>
          </div>
          <p className="progress-label-2">JM</p>
          <div className="progress-container-2">
            <progress max="100" value="25">25%</progress>
          </div>
          <p className="progress-label-3">JR</p>
          <div className="progress-container-3">
            <progress max="100" value="50">50%</progress>
          </div>
        </div>

      </div>
      
      <EntregasSuper />
      
    </div>
  )
}

export default Perfil_Entregas
