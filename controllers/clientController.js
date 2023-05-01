const Client = require('../models/clientModel')
const jwt = require('jsonwebtoken')

exports.Register = async(req, res) => {
    const { codeclient, nom, prenom, date_de_naissance, sexe, adresse, num_de_telephone } = req.body;

    try {
        const client = await Client.findOne({ codeclient })
        client && res.send('you have an a account ')
        const newclient = await new client({
            codeclient,
            nom,
            prenom,
            date_de_naissance,
            sexe,
            adresse,
            num_de_telephone,
        })
        await newuser.save()
        res.status(200).json(newclient)

    } catch (error) {
        res.status(500).json(error)
    }
}