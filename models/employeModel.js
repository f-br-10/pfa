const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema(
  {
    matricule: {
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

    num_de_telephone: {
      type: String,
      required: true,
    },

    date_de_recrutment: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const employe = mongoose.model("employe", employeSchema);
module.exports = employe;
