import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import imgPred from './entregasimg/empresario.png'
import { ApiUrlXD } from '../../const/global'

import perfil from "./entregasimg/empresario.png"




function About() {
  const location = useLocation();
  const idU = location.state.usid;
  const [imagen, setImagen] = useState("");
  const [data, setData] =useState();
  
  useEffect(() => {
   
      fetch(ApiUrlXD + `getSuUs/${idU}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((json) => {
        setData(json.SuUs[0]);
        console.log("asdas",data);
      })

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

    //conseguir los demas datos del usuario supervisor 
    

  },[])

  return (

    <div className="container-general">
      <div className="list-groupentrepadre">
        <div className="perfilcontent">
          <div className="about-cont">

            <img src={"https://drive.google.com/uc?export=view&id=" + imagen.slice(32).slice(0, -17)} className="img-Perfil-e"
              alt='Foto de perfil'
              onError={(e) => (
                e.target.onError = null, e.target.src = imgPred
              )}
            ></img>


          </div>


          <div className="about-tex">
            {data ? <p>Nombre: {data.Nombre}</p> : <div>Error</div>}
              

          </div>


        </div>


      </div>
    </div>
  )
}

export default About
