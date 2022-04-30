import React, { useEffect, useState } from 'react'

import perfil from "./entregasimg/empresario.png"
import "./Perfil-Entregas.css"

function Perfil_Entregas() {
  const idU = localStorage.getItem("usId");
  const [imagen, setImagen] = useState("");
// "https://drive.google.com/uc?export=view&id=" + XD

  useEffect(() => {

    fetch(`http://localhost:3001/users/imgPerfil/${idU}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((json) => {
        //https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing
        //12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing
        console.log(json.users[0].Imagen)
        setImagen("https://drive.google.com/uc?export=view&id=" + json.users[0].Imagen.slice(32).slice(0,-17))
      })

  })



  return (

    <div class="list-groupentrepadre">
      <div className="perfilcontent">
        <div class="about-cont">
          <img src={imagen}  class="img" alt='Foto de perfil'></img>
          
        </div>

        <h1 >Hola</h1>

        <div class="about-tex">

          <p>Nombre: {localStorage.getItem("nombre")}</p>
          <p>Planta: {localStorage.getItem("planta")}</p>
          <p>Correo: {localStorage.getItem("correo")}</p>

        </div>
        <div class="progress-element">
          <p class="progress-label">JI</p>
          <div class="progress-container-1">
            <progress max="100" value="75">75%</progress>
          </div>
          <p class="progress-label-2">JM</p>
          <div class="progress-container-2">
            <progress max="100" value="25">25%</progress>
          </div>
          <p class="progress-label-3">JR</p>
          <div class="progress-container-3">
            <progress max="100" value="50">50%</progress>
          </div>
        </div>

      </div>
      <div className="entregacontent">
        <div className="tittleentre">
          <center><h1>Entregas</h1></center>
        </div>
        <div class="contentre justify-content-center">
          <div className="scrolltable1">
            <table className="table">
              <thead className="encabetable">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Puntaje</th>
                  <th scope="col">De</th>

                </tr>
              </thead>
              <tbody className="cuerpotable">
                <tr>
                  <th scope="row">1</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>89</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>98</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible  </button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil_Entregas
