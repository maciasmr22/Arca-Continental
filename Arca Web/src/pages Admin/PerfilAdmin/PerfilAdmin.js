import React from 'react';
import Directorio from '../../components/Directorio/Directorio';
import MostrarKPI from '../../components/mostrarKPI/MostrarKPI';
import './PerfilAdmin.css'

function PerfilAdmin() {
    return (
        <div className="list-groupentrepadre">
            <div className="perfilcontentAdmin">
                <MostrarKPI />
            </div>

            <div >
                <Directorio />
            </div>


        </div>


    );
}

export default PerfilAdmin;