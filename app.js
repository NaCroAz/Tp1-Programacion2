const express = require('express')
const dbconnect = require('./config')
// Crea una variable para usar con el modelo extraido de userModel.js
const ModelPlato = require('./platoModel')
const app = express()

const router = express.Router()



// Rutas CRUD
// Create - Read - Update- Delete

// Crear un plato
router.post("/", async(req, res) => {
    const body = req.body
    // Usar el modelo del objeto creado en userModel.js
    const respuesta = await ModelPlato.create(body)
    res.send(respuesta)
})

// Obtiene en la pagina
router.get("/", async(req, res) => {
    const respuesta = await ModelPlato.find({})
    res.send(respuesta)
})

// Obtener un plato
router.get("/:id", async(req, res) => {
    const id = req.params.id
    const respuesta = await ModelPlato.findById(id)
    res.send(respuesta)
})

// Actualizar plato
router.put("/:id", async(req, res) => {
    const body = req.body
    const id = req.params.id
    const respuesta = await ModelPlato.findOneAndUpdate({_id: id }, body)
    res.send(respuesta)
})

// Borrar un plato
router.delete("/:id", async(req, res) => {
    const id = req.params.id
    const respuesta = await ModelPlato.deleteOne({_id: id})
    res.send(respuesta)
})



// Deja usar JSON, usa rutas
app.use(express.json())
app.use(router)
app.listen(3001, () => {
    console.log("El servidor esta en el puerto 3001")
})

dbconnect();