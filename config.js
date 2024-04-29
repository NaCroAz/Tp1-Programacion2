// Conexion de la base de datos MONGODB
const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect("mongodb://localhost:27017/Restaurante_TP1")
        .then(() => {
            console.log("Conexión exitosa a MongoDB");
        })
        .catch((error) => {
            console.error("Error de conexión a MongoDB:", error);
        });
};

module.exports = dbconnect;