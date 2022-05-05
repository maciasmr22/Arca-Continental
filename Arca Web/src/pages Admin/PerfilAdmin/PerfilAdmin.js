import React from 'react';
import Directorio from '../../components/Directorio/Directorio';
import MostrarKPI from '../../components/mostrarKPI/MostrarKPI';
import './PerfilAdmin.css'

function PerfilAdmin() {
    return (
        <div className="container-general-peradmin">
            <div className="perfilcontent-admin">
                <MostrarKPI />
            </div>

            <div className = "peradmin-dir">
                <Directorio />
            </div>


        </div>


    );
}

export default PerfilAdmin;