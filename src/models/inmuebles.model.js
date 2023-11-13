const { Schema, model } = require('mongoose')

//! ALERTA CAMBIAR .ENV LA BASE DE DATOS
const inmueblesShema = new Schema({
    piso: Number,
    letra: String,
    m2: Number,
    habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail: String
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('inmueble', inmueblesShema)