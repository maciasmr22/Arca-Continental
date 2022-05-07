import React, { useEffect, useState } from 'react'
import EntregasSuper from '../../components/EntregasSuper/EntregasSuper';
import SubirKPIS from '../../components/subirKPIs/SubirKPIS';
import { ApiUrlXD } from '../../const/global';
import imgPred from './entregasimg/empresario.png'

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

    <div className="container-general">

      <div className="list-groupentrepadre">
        <div className="perfilcontent">
          <div className="about-cont">
            <img src={"https://drive.google.com/uc?export=view&id=" + imagen.slice(32).slice(0, -17)} className="img-Perfil-e"
              alt='Foto de perfil'
              onClick={() => {
                setShow(!show);
              }}
              onError={(e) => (
                e.target.onError = null, e.target.src = imgPred
              )}
            ></img>

          </div>




          {show ? (
            <div className="container-form-perfil">
              <form onSubmit={handleSubmit}>
                <p className="texto-foto-per negro">
                  Sube tu foto de perfil a drive, dale click 
                  dereho a tu imagen y haz clic obtener enlace,
                  copia el link, pegalo en el cuadro de texto.
                  <div className="texto-b-foto-per negrob" >*IMPORTANTE* </div>
                  Si aparece "restringido" cambiar a "cualquier persona
                  que tenga el vinculo". Por ultimo presiona "subir"
                </p>
 <br />
                <input type="url" placeholder="Url de tu imagen" id="imgURL" onChange={e => setNewImg(e.target.value)} required></input>
                <br />

                <div className="container-button-foto-per">
                  <button class="btn button-certi" type="submit">subir</button>
                </div>

              </form>
            </div>

          ) : <div></div>}


          <div className="about-tex">

            <p>Nombre: {localStorage.getItem("nombre")}</p>
            <p>Planta: {localStorage.getItem("planta")}</p>
            <p>Correo: {localStorage.getItem("correo")}</p>

          </div>

          
          <div className="centrar-kpis">
            <SubirKPIS />
          </div>

        </div>
        
        <div className="entregas-perfil">
          <EntregasSuper />
        </div>
      </div>
    </div>
  )
}

export default Perfil_Entregas
