const UsersService = require('../services/users.js');

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
    }
};