const { Register } = require('../controllers/clientController')

const route = require('express').Router()

route.post('/registerclient', Register)

module.exports = route