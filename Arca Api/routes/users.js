const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()

const UsersControllers = require('../controllers/users.js')

router.get('/', UsersControllers.getAllUsers)
router.get('/rankJI', UsersControllers.getRankJI)
router.get('/rankJM', UsersControllers.getRankJM)
router.get('/rankJR', UsersControllers.getRankJR)
router.get('/rankTWI', UsersControllers.getRankTWI)

router.post('/login', UsersControllers.getLogin) 
router.get('/imgPerfil/:identi', UsersControllers.getImg)
router.put('/cambiarImg', UsersControllers.setImg)
router.post('/getSubNiv', UsersControllers.getSubNiv)
router.put('/subirArch', UsersControllers.upEntrega)
router.get('/getSupervisor/:identi', UsersControllers.getSuper)
router.put('/setOper', UsersControllers.setOper)
router.put('/setMejoras', UsersControllers.setMejoras)
router.get('/getSumMedKPI',UsersControllers.getSumMedKPI)
router.get('/getAllSuperUs',UsersControllers.getAllSuperUs)
router.get('/getAllSuperUs/:identi', UsersControllers.getAllSuperUs2)
router.get('/getSuUs/:identi', UsersControllers.getSuUs)
router.put('/confirmarKPI/:identi', UsersControllers.confirmarKPI)
router.put('/calificar', UsersControllers.calificar)
router.put('/revisaCertificaciones', UsersControllers.reviCerti)
router.get('/certificarBronce/:identi', UsersControllers.certifiBron)
router.get('/certificarPlata/:identi', UsersControllers.certifiPlat)
router.get('/certificarOro/:identi', UsersControllers.certifiOro)

//Rutas Videojuego

router.get('/juegonivel', UsersControllers.verifJuegoNivel)



//SE BORRAN DESPUÉS
router.get('/pruebaGet', UsersControllers.pruebaGet)
router.post('/pruebaPost', UsersControllers.pruebaPost)
router.put('/pruebaPut', UsersControllers.pruebaPut)

module.exports = router