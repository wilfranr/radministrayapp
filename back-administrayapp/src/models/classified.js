const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

//Clasificados
const clasifiedSchema = new Schema({ 
    email: {type: String, required: [true, 'Email obligatorio']}, 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    contacto: String, 
    url: String, 
    image: String, 
    date:{
        type: Date, default: Date.now
    }, 
    activo: {
        type: Boolean, default: true
    } 
});

// Convertir a modelo 
module.exports =  mongoose.model('clasified', clasifiedSchema); 
