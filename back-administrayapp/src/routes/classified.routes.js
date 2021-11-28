const express = require('express')
const router = express.Router(); 
// importar el modelo classified 
//
const classifiedController = require('../controllers/classified.controller')
const multer = require('multer')
const fs = require('fs')

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+''+file.originalname)
    },
})

let upload = multer({
    storage: storage,    
}).single("image")

// Agregar una classified 
router.post('/', upload, classifiedController.add); 


// Get con parámetros 
router.get('/:id', classifiedController.find);


// Get con todos los documentos 
router.get('/', classifiedController.list);


// Delete eliminar una classified 
router.delete('/:id', classifiedController.delete);


// Put actualizar una classified 
router.put('/:id', upload, classifiedController.update);


// Exportamos la configuración de express app
module.exports = router;
