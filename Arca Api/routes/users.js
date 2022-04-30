const express = require('express')
const router = express.Router()

const UsersControllers = require('../controllers/users.js')

router.get('/', UsersControllers.getAllUsers)
router.get('/rankJI', UsersControllers.getRankJI)
router.get('/rankJM', UsersControllers.getRankJM)
router.get('/rankJR', UsersControllers.getRankJR)
router.get('/rankTWI', UsersControllers.getRankTWI)

router.post('/login', UsersControllers.getLogin) 
router.get('/imgPerfil/:identi', UsersControllers.getImg)

module.exports = router