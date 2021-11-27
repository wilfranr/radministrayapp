const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
const authRoutes = require('./routes/auth.routes')
const classifiedRoutes = require('./routes/classified.routes')//11/09/2021
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
app.use(express.json());//11/09/2021
app.use(express.static("uploads"))//11/09/2021

//rutas
app.use('/auth', authRoutes)
app.use('/classified', classifiedRoutes);//11/09/2021

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/dist/'))
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    })
}

app.listen(app.get('port'), ()=>{
    console.log('Server Runing')

})