const { header } = require('express/lib/request');
const dbService = require('../config/db.js');

const getAllUsers = () => {
    sql = 'SELECT * FROM usuario'
    return dbService.querypromise(sql)
}

const getRankJI = () => {
    sql = 'SELECT usuario.Nombre, usuario.Planta, supervisor.CertiBronce,supervisor.CertiPlata,supervisor.CertiOro, SumaPuntaje.SumPuntaje, SumaPuntaje.Super_ID' +
        ' FROM supervisor,usuario, (SELECT SUM(MaxPuntajeEntrega) AS SumPuntaje, Super_ID' +
        ' FROM (SELECT' +
        ' MAX(entrega.PuntajeEntrega) AS MaxPuntajeEntrega, entrega.Sub_ID, entrega.Super_ID' +
        ' FROM entrega, medalla, subnivel' +
        ' WHERE entrega.Sub_ID = subnivel.Sub_ID AND subnivel.Meda_ID = medalla.Meda_ID AND medalla.Elemento = "JI"' +
        ' GROUP BY entrega.Super_ID, entrega.Sub_ID) AS newTable' +
        ' GROUP BY newTable.Super_ID) AS SumaPuntaje' +
        ' WHERE supervisor.Usuario_ID = usuario.Usuario_ID AND supervisor.Super_ID = SumaPuntaje.Super_ID' +
        ' ORDER BY SumaPuntaje.SumPuntaje DESC'
    return dbService.querypromise(sql)
}

const getRankJM = () => {
    sql = 'SELECT usuario.Nombre, usuario.Planta, supervisor.CertiBronce,supervisor.CertiPlata,supervisor.CertiOro, SumaPuntaje.SumPuntaje, SumaPuntaje.Super_ID' +
        ' FROM supervisor,usuario, (SELECT SUM(MaxPuntajeEntrega) AS SumPuntaje, Super_ID' +
        ' FROM (SELECT' +
        ' MAX(entrega.PuntajeEntrega) AS MaxPuntajeEntrega, entrega.Sub_ID, entrega.Super_ID' +
        ' FROM entrega, medalla, subnivel' +
        ' WHERE entrega.Sub_ID = subnivel.Sub_ID AND subnivel.Meda_ID = medalla.Meda_ID AND medalla.Elemento = "JM"' +
        ' GROUP BY entrega.Super_ID, entrega.Sub_ID) AS newTable' +
        ' GROUP BY newTable.Super_ID) AS SumaPuntaje' +
        ' WHERE supervisor.Usuario_ID = usuario.Usuario_ID AND supervisor.Super_ID = SumaPuntaje.Super_ID' +
        ' ORDER BY SumaPuntaje.SumPuntaje DESC'
    return dbService.querypromise(sql)
}

const getRankJR = () => {
    sql = 'SELECT usuario.Nombre, usuario.Planta, supervisor.CertiBronce,supervisor.CertiPlata,supervisor.CertiOro, SumaPuntaje.SumPuntaje, SumaPuntaje.Super_ID' +
        ' FROM supervisor,usuario, (SELECT SUM(MaxPuntajeEntrega) AS SumPuntaje, Super_ID' +
        ' FROM (SELECT' +
        ' MAX(entrega.PuntajeEntrega) AS MaxPuntajeEntrega, entrega.Sub_ID, entrega.Super_ID' +
        ' FROM entrega, medalla, subnivel' +
        ' WHERE entrega.Sub_ID = subnivel.Sub_ID AND subnivel.Meda_ID = medalla.Meda_ID AND medalla.Elemento = "JR"' +
        ' GROUP BY entrega.Super_ID, entrega.Sub_ID) AS newTable' +
        ' GROUP BY newTable.Super_ID) AS SumaPuntaje' +
        ' WHERE supervisor.Usuario_ID = usuario.Usuario_ID AND supervisor.Super_ID = SumaPuntaje.Super_ID' +
        ' ORDER BY SumaPuntaje.SumPuntaje DESC'
    return dbService.querypromise(sql)
}

const getRankTWI = () => {
    sql = 'SELECT usuario.Nombre, usuario.Planta, supervisor.CertiBronce,supervisor.CertiPlata,supervisor.CertiOro, SumaPuntaje.SumPuntaje, SumaPuntaje.Super_ID' +
        ' FROM supervisor,usuario, (SELECT SUM(MaxPuntajeEntrega) AS SumPuntaje, Super_ID' +
        ' FROM (SELECT' +
        ' MAX(entrega.PuntajeEntrega) AS MaxPuntajeEntrega, entrega.Sub_ID, entrega.Super_ID' +
        ' FROM entrega' +
        ' GROUP BY entrega.Super_ID, entrega.Sub_ID) AS newTable' +
        ' GROUP BY newTable.Super_ID) AS SumaPuntaje' +
        ' WHERE supervisor.Usuario_ID = usuario.Usuario_ID AND supervisor.Super_ID = SumaPuntaje.Super_ID' +
        ' ORDER BY SumaPuntaje.SumPuntaje DESC'

    return dbService.querypromise(sql)
}

const getLogin = (body) => {
    const { correo, contrasenia } = body
    sql = `SELECT Usuario_ID, Nombre, Correo, Planta, Tipo_Usuario FROM usuario 
            WHERE usuario.Correo = "${correo}" AND 
            usuario.Contrasenia = "${contrasenia}"`
    return dbService.querypromise(sql)
}


const getImg = (identi) => {
    sql = `SELECT Imagen FROM supervisor WHERE Usuario_ID = "${identi}"`;
    return dbService.querypromise(sql)
}

const setImg = (body) => {
    const { idU, newImg } = body;
    sql = `UPDATE supervisor SET Imagen = "${newImg}" WHERE Usuario_ID = "${idU}"`
    return dbService.querypromise(sql)
}

const getSubNiv = (body) => {
    const { idU } = body;
    sql = `select distinct sub.Sub_ID,
            sub.Instruccion,
            sub.Color,
            sub.Elemento,
            puntajes.PuntajeEntrega,
            puntajes.PuntajeVideojuego,
            puntajes.Comentario,
            puntajes.Fecha,
            puntajes.Revisado,
            puntajes.Archivo
        from (select subnivel.Sub_ID, 
                    subnivel.Instruccion, 
                    medalla.Color, 
                    medalla.Elemento 
                from subnivel, medalla 
            where subnivel.Meda_ID = medalla.Meda_ID) as sub
                left join (select entrega.Sub_ID,
                    entrega.Super_ID,
                    entrega.PuntajeEntrega,
                    entrega.PuntajeVideojuego,
                    entrega.Comentario,
                    entrega.Fecha,
                    entrega.Archivo,
                    entrega.Revisado
                        from entrega, supervisor, usuario
                            where entrega.Super_ID = supervisor.Super_ID
                        AND supervisor.Usuario_ID = "${idU}") as puntajes
            ON sub.Sub_ID = puntajes.Sub_ID
            ORDER BY sub.Sub_ID asc`;
    return dbService.querypromise(sql);
}

const upEntrega = (body) => {
    const { supervisorID, idSub, urlE } = body;
    sql = `UPDATE entrega set Archivo = "${urlE}", Revisado = 0, Fecha = current_date, PuntajeEntrega = 0 
                WHERE Sub_ID = ${idSub} AND Super_ID = ${supervisorID}`;
    return dbService.querypromise(sql);
}



const getSuper = (identi) => {
    sql = `SELECT * FROM supervisor WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql)
}

const setOper = (body) => {
    const { operCerti, operTotal, idU } = body;
    sql = `UPDATE supervisor SET NumOperadores = ${operCerti}, 
        Operarios_Totales = ${operTotal}, Revisado = 0
         WHERE Usuario_ID = "${idU}"`
    return dbService.querypromise(sql);
}

const setMejoras = (body) => {
    const { mejorasImp, porMinParco, porMiEnvDes, porMjMinCamFor, idU } = body;
    sql = `UPDATE supervisor 
                SET Mejoras_Implementadas = ${mejorasImp}, 
                    Mjrs_Mins_Paro_Porcentaje = ${porMinParco}, 
                    Mjrs_Envs_Dsechds_Porcentaje = ${porMiEnvDes}, 
                    Mjrs_Mins_CambioFormato_Porcentaje = ${porMjMinCamFor}, Revisado = 0
                WHERE Usuario_ID = "${idU}"`;

    return dbService.querypromise(sql);

}

const getSumMedKPI = () => {
    sql = `SELECT t1.ctCertiBronce, t2.ctCertiPlata, t3.ctCertiOro, t4.ctSuperTotales 
    FROM ( SELECT COUNT(supervisor.CertiBronce) as ctCertiBronce 
            from supervisor 
            WHERE supervisor.CertiBronce = 1 ) AS t1, 
            (SELECT COUNT(supervisor.CertiPlata)  as ctCertiPlata
            from supervisor 
            WHERE supervisor.CertiPlata = 1 ) AS t2,
            (SELECT COUNT(supervisor.CertiOro)  as ctCertiOro
            from supervisor 
            WHERE supervisor.CertiOro = 1 ) as t3,
            (SELECT COUNT(Super_ID) as ctSuperTotales  
            FROM supervisor) as t4
            `;

    return dbService.querypromise(sql);
}

const getAllSuperUs =() => {
    sql = `SELECT * FROM usuario WHERE Tipo_Usuario = "Supervisor"`
    return dbService.querypromise(sql);
}
const getAllSuperUs2 = (identi) => {
    sql = `SELECT * FROM usuario WHERE Tipo_Usuario = "Supervisor" AND Nombre LIKE "%${identi}%"` 
    return dbService.querypromise(sql);
}

const getSuUs = (identi) => {
    sql = `SELECT * FROM usuario WHERE Usuario_ID = "${identi}"` 
    return dbService.querypromise(sql);
}

const confirmarKPI = (identi) => {
    sql = `UPDATE supervisor SET Revisado = 1 WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql);
}

const calificar = (body) => {
    const {com, cali, subniv, idSup} = body;
    sql = `UPDATE entrega SET PuntajeEntrega = ${cali}, Comentario = "${com}", Revisado = 1
        WHERE Super_ID = ${idSup} AND Sub_ID = ${subniv} `
    return dbService.querypromise(sql);

}

const reviCerti = (body) => {
    const {superviId, colorcert} = body;
    sql = `select entrega.PuntajeEntrega
    from entrega, subnivel, medalla, supervisor
    WHERE entrega.Super_ID = supervisor.Super_ID
    AND supervisor.Usuario_ID = "${superviId}" 
    AND entrega.Sub_ID = subnivel.Sub_ID
    AND subnivel.Meda_ID = medalla.Meda_ID
    AND medalla.Color = "${colorcert}" `
    return dbService.querypromise(sql);
}

const certifiBron = (identi) => {
    sql = `UPDATE supervisor SET CertiBronce = 1 WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql);
}

const certifiPlat = (identi) => {
    sql = `UPDATE supervisor SET CertiBronce = 1 WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql);
}

const certifiOro = (identi) => {
    sql = `UPDATE supervisor SET CertiBronce = 1 WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql);
}


module.exports = {
    getAllUsers,
    getRankJI,
    getRankJM,
    getRankJR,
    getRankTWI,
    getLogin,
    getImg,
    setImg,
    getSubNiv,
    upEntrega,
    getSuper,
    setOper,
    setMejoras,
    getSumMedKPI,
    getAllSuperUs,
    getAllSuperUs2,
    getSuUs,
    confirmarKPI,
    calificar,
    reviCerti,
    certifiBron,
    certifiPlat,
    certifiOro
}