const { Register } = require('../controllers/medecinController')

const route = require('express').Router()

route.post('/registermedecin', Register)

module.exports = route