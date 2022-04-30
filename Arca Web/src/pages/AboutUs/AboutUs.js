
import React from 'react';
import './AboutUs.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';

function AboutUs() {
    return (
        <div className="container-twi">
            <div className="divplane-twi">
                <h1 className="title-twi">Sobre TWI</h1>

                <div className="row1">
                    <div className="column" >
                        <img className="img-twi" src={img1} alt="We can do it pic" />
                    </div>
                    <div className="column" >
                        <img className="img2-twi" src={img2} alt="Twi pic" />
                    </div>
                </div>

                <div className="row2">
                    <p className="text-twi">

                        El programa TWI fue desarrollado en los Estados Unidos durante la Segunda
                        Guerra Mundial para entrenar el personal no cualificado que sustituía a los
                        trabajadores que iban al frente.
                        <br /><br />
                        El gobierno federal creó la agencia “Training Within Industry Services” . TWI
                        Services trabajó con el objetivo de crear un tipo de formación que ayudara a
                        acelerarla incorporación de los trabajadores no cualificados, aumentando la
                        productividad de las empresas para satisfacer la creciente demanda por parte del ejército.
                        Para cumplir con sus objetivos TWI Services contó con los mejores especialistas incorporados de
                        las grandes empresas estadunidenses.
                        <br /><br />
                        El equipo de TWI Services creó un programa para formar a los supervisores en tres habilidades:
                        la habilidad de instrucción, la habilidad de liderazgo y la habilidadde mejora de métodos.
                        Así nacieron los cursos TWI: Instrucción del Trabajo, Relaciones de Trabajo y Métodos de Trabajo.
                        Hasta el otoño de 1945, 1.750.650personas recibieron la formación y la certificación en alguno de los cursos TWI.
                        El programa TWI proporcionó una formación rápida y consistente y fue reconocidocomo uno de los factores que ayudó
                        en la victoria al incrementar la producción industrial. Después de la guerra el gobierno cerró la Agencia TWI Services.
                        Las empresas norteamericanas dejaron de usar el Programa TWI al verlo como un programa para los tiempos de guerra y no
                        como una práctica industrialpermanente.
                    </p>

                </div>
            </div>


        </div>

    );
}

export default AboutUs;