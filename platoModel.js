// Para dejar pasar esquemas de los JSON
const mongoose = require('mongoose')
const platoModel = new mongoose.Schema(
    {
        Categoria:{
            type: String
        },
        Plato:{
            type:  String
        },
        Precio:{
            type: String
        },
        Preparacion:{
            type: String
        },
        Opinion:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const ModelPlato = mongoose.model("menu", platoModel)
module.exports = ModelPlato