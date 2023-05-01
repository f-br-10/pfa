const { Register } = require('../controllers/employeController')

const route = require('express').Router()

route.post('/registeremploye', Register)

module.exports = route