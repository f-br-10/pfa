const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const clientRoute = require('./routers/clientRoute')
const employeRoute = require('./routers/employeRoute')
const medecinRoute = require('./routers/medecinRoute')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected")
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(5000, () => console.log("server is ready"))

app.use('/regitreC', clientRoute)
app.use('/regitreE', employeRoute)
app.use('/regitreM', medecinRoute)