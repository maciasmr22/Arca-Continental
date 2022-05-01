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
    const {correo, contrasenia} = body
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
    const {idU, newImg} = body;
    sql = `UPDATE supervisor SET Imagen = "${newImg}" WHERE Usuario_ID = "${idU}"`
    return dbService.querypromise(sql)
}

const getSubNiv = () => {
    sql = 'select subnivel.Sub_ID, subnivel.Instruccion, medalla.Color, medalla.Elemento from subnivel, medalla where subnivel.Meda_ID = medalla.Meda_ID order by Sub_ID asc';
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
    getSubNiv
}