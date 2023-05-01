const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    codeclient: {
        type: String,
        required: true,
        unique: true

    },
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true

    },
    date_de_naissance: {
        type: date,
        required: true

    },
    sexe: {
        type: String,
        required: true

    },
    adresse: {
        type: String,
        required: true

    },
    num_de_telephone: {
        type: String,
        required: true

    },

}, { timestamps: true });

const client = mongoose.model("client", clientSchema)
module.exports = client