const mongoose = require("mongoose"); // 
const { type } = require("os");
const animalSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        required: true,

    },
    tipo: {
        type: String

    },
    fecha: {
        type: Date,
        requiered: true,
    }
});
module.exports = mongoose.model("Animal", animalSchema);
