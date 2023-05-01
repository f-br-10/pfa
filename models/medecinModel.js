const mongoose = require("mongoose");

const medecinSchema = new mongoose.Schema(
  {
    matricule_fisc: {
      type: String,
      required: true,
      unique: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    num_de_telephone_fixe: {
      type: String,
      required: true,
    },
    num_de_telephone_gsm: {
      type: String,
      required: true,
    },

    specialite: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const medecin = mongoose.model("medecin", medecinSchema);
module.exports = medecin;
