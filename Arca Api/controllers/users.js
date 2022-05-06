const UsersService = require('../services/users.js');
const jwt = require("jsonwebtoken")

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const users = await UsersService.getAllUsers();
            res.status(200).json({users})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getRankJI : async (req, res, next) => {
        try {
            const rank = await UsersService.getRankJI();
            res.status(200).json({rank})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getRankJM : async (req, res, next) => {
        try {
            const rank = await UsersService.getRankJM();
            res.status(200).json({rank})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getRankJR : async (req, res, next) => {
        try {
            const rank = await UsersService.getRankJR();
            res.status(200).json({rank})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getRankTWI : async (req, res, next) => {
        try {
            const rank = await UsersService.getRankTWI();
            res.status(200).json({rank})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getLogin : async (req, res, next) => {
        try {
            const user = await UsersService.getLogin(req.body);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        }
    },
    getImg : async (req, res, next) => {
        try{
            const users = await UsersService.getImg(req.params.identi);
            res.status(200).json({users})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },
    setImg : async (req, res, next) => {
        try {
            const user = await UsersService.setImg(req.body);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        }
    },
    getSubNiv : async (req, res, next) => {
        try {
            const subNivel = await UsersService.getSubNiv(req.body);
            res.status(200).json({subNivel})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    }, 
    upEntrega : async (req,res,next) => {
        try {
            const entrega = await UsersService.upEntrega(req.body);
            res.status(200).json({entrega})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        } 
    },
    getSuper : async (req,res,next) => {
        try{
            const sup = await UsersService.getSuper(req.params.identi);
            res.status(200).json({sup})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        } 
    },
    setOper : async (req,res,next) => {
        try {
            const opers = await UsersService.setOper(req.body);
            res.status(200).json({opers})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        }
    },
    setMejoras : async (req,res,next) => {
        try {
            const mejo = await UsersService.setMejoras(req.body);
            res.status(200).json({mejo})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        }
    },
    getSumMedKPI : async (req,res,next) => {
        try {
            const cont = await UsersService.getSumMedKPI();
            res.status(200).json({cont})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    getAllSuperUs : async (req,res,next) => {
        try {
            const usSu = await UsersService.getAllSuperUs();
            res.status(200).json({usSu})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    }, 
    getAllSuperUs2 : async (req,res,next) => {
        try {
            const usSu = await UsersService.getAllSuperUs2(req.params.identi);
            res.status(200).json({usSu})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    }, 
    getSuUs : async (req,res,next) => {
        try {
            const SuUs = await UsersService.getSuUs(req.params.identi);
            res.status(200).json({SuUs})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    confirmarKPI : async (req,res,next) => {
        try {
            const us = await UsersService.confirmarKPI(req.params.identi);
            res.status(200).json({us})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },
    calificar : async(req, res, next) => {
        try {
            const cal = await UsersService.calificar(req.body);
            res.status(200).json({cal})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },
    reviCerti : async(req, res, next) => {
        try {
            const certi = await UsersService.reviCerti(req.body);
            res.status(200).json({certi})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },
    certifiBron : async(req, res, next) => {
        try {
            const certi = await UsersService.certifiBron(req.params.identi);
            res.status(200).json({certi})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },
    certifiPlat : async(req, res, next) => {
        try {
            const certi = await UsersService.certifiPlat(req.params.identi);
            res.status(200).json({certi})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },
    certifiOro : async(req, res, next) => {
        try {
            const certi = await UsersService.certifiOro(req.params.identi);
            res.status(200).json({certi})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },

    //VIDEOJUEGO
    verifJuegoNivel : async(req, res, next) => {
        try {
            const verif = await UsersService.verifJuegoNivel(req.params.supID, req.params.subID);
            res.status(200).json({verif})
        } catch(err) {
            res.status(500).json({"message": `error en verificarjuego. Err: ${err}`});
        } 
    },
    tranformASuperID : async(req, res, next) => {
        try {
            const supid = await UsersService.tranformASuperID(req.params.identi);
            res.status(200).json({supid})
        } catch(err) {
            res.status(500).json({"message": `Datos de la Sesión no encontrados. Err: ${err}`});
        } 
    },
    insertEntrega : async(req, res, next) => {
        try {
            const  iEntrega = await UsersService.insertEntrega(req.body);
            res.status(200).json({iEntrega})
        } catch(err) {
            res.status(500).json({"message": `Error insert videojuego. Err: ${err}`});
        } 
    },
    updateEntrega : async(req, res, next) => {
        try {
            const  uEntrega = await UsersService.updateEntrega(req.body);
            res.status(200).json({uEntrega})
        } catch(err) {
            res.status(500).json({"message": `Error update videojuego. Err: ${err}`});
        } 
    }
    
};