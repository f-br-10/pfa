const Medecin = require('../models/medecinModel')

const jwt = require('jsonwebtoken')
exports.Register = async(req, res) => {
    const { matricule_fisc, nom, prenom, email, specialite, num_de_telephone_fixe, num_de_telephone_gsm } = req.body;

    try {
        const medecin = await Medecin.findOne({ matricule_fisc })
        medecin && res.send('you have an a account ')
        const newmedecin = await new medecin({
            matricule_fisc,
            nom,
            prenom,
            num_de_telephone_fixe,
            num_de_telephone_gsm,
            specialite,
            email,

        })
        await newmedecin.save()
        res.status(200).json(newmedecin)

    } catch (error) {
        res.status(500).json(error)
    }
}