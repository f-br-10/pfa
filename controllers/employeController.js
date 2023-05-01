const Employe = require('../models/employeModel')


exports.Register = async(req, res) => {
    const { matricule, nom, prenom, date_de_recrutment, adresse, num_de_telephone } = req.body;

    try {
        const employe = await Employe.findOne({ matricule })
        employe && res.send('you have an a account ')
        const newemploye = await new employe({
            matricule,
            nom,
            prenom,
            num_de_telephone,
            date_de_recrutment,
            adresse,

        })
        await newemploye.save()
        res.status(200).json(newemploye)

    } catch (error) {
        res.status(500).json(error)
    }
}