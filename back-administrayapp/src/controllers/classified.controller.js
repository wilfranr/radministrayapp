const classified = require('../models/classified')//11/09/2021
const fs = require('fs')

const classifiedController = {
    add: async function(req, res) { 
        const body = req.body;
        //console.log(req.file)
        const imagename = req.file.filename
        body.image = imagename 
        try { 
            const classifiedDB = await classified.create(body); 
            res.status(200).json(classifiedDB); 
        } catch (error) { 
            return res.status(500).json({ 
                mensaje: 'Ocurrio un error', error 
            }) 
        } 
    },
    list: async function(req, res) { 
        try { 
            const classifiedDB = await classified.find(); 
            res.json(classifiedDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', error 
            }) 
        } 
    },
    find: async function (req, res) { 
        const _id = req.params.id; 
        try { 
            const classifiedDB = await classified.findOne({_id}); res.json(classifiedDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', error 
            })
        } 
    },
    delete: async function (req, res) { 
        const _id = req.params.id; 
        try { 
            const classifiedDB = await classified.findByIdAndDelete({_id}); 
            if(!classifiedDB){ 
                return res.status(400).json({ 
                    mensaje: 'No se encontró el id indicado', error 
                }) 
            }
            //console.log(classifiedDB.image)
            if(classifiedDB.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+classifiedDB.image)
                } catch (error) {
                    console.log(error)
                }
            }
            res.json(classifiedDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', error 
            }) 
        } 
    },
    update: async function (req, res) { 
        const _id = req.params.id;
        let new_image = ''
        //console.log(req.file)
        //console.log(req.body.old_image)
        if(req.file){
            new_image = req.file.filename
            try {
                fs.unlinkSync('./uploads/'+ req.body.old_image)
            } catch (error) {
                console.log(error)
            }
        }else{
            new_image = req.body.old_image
        }
        const body = req.body;
        body.image = new_image
        try { 
            const classifiedDB = await classified.findByIdAndUpdate(_id,body, {new: true}); 
            res.json(classifiedDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', error 
            }) 
        } 
    }
}

module.exports = classifiedController