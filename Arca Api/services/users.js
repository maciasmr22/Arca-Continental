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
    sql = `select sub.Sub_ID,
            sub.Instruccion,
            sub.Color,
            sub.Elemento,
            puntajes.PuntajeEntrega,
            puntajes.PuntajeVideojuego
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
                entrega.Comentario
            from entrega, supervisor, usuario
            where entrega.Super_ID = supervisor.Super_ID
            AND supervisor.Usuario_ID = "${idU}") as puntajes
            ON sub.Sub_ID = puntajes.Sub_ID
            ORDER BY sub.Sub_ID asc`;
    return dbService.querypromise(sql);
}

const upEntrega = (body) =>{
    const {idU, idSub, urlE} = body;
    const sql = `UPDATE entrega SET Archivo = "${urlE}", Fecha = CURRENT_DATE WHERE Sub_ID = ${idSub} AND Super_ID = ${idU}`;
    return dbService.querypromise(sql);
}

const getSuper = (identi) =>{
    sql = `SELECT * FROM supervisor WHERE Usuario_ID = "${identi}"`
    return dbService.querypromise(sql)
}

const setOper = (body) =>{
    const {operCerti, operTotal, idU} = body;
    const sql = `UPDATE supervisor SET NumOperadores = ${operCerti}, 
        Operarios_Totales = ${operTotal} WHERE Usuario_ID = "${idU}"`
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
    setOper
}