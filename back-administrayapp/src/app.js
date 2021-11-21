const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()

//Setrtigns
app.set('port', process.env.PORT || 3000)

mongoose.connect(process.env.DB_STRING).then(db => console.log('Connected to mongo'))
.catch(err => console.log(err))
app.use('/documentation', express.static(path.join(__dirname, '../doc/')))

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

//rutas
app.use('/auth', authRoutes)

app.listen(app.get('port'), ()=>{
    console.log('Server Runing')

})