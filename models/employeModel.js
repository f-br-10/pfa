const employeSchema = new mongoose.Schema({
    matricule: {
        type: string,
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

    num_de_telephone: {
        type: string,
        required: true

    },

    date_de_recrutment: {
        type: date,
        required: true

    },
    adresse: {
        type: String,
        required: true

    },
}, { timestamps: true });

const employe = mongoose.model("employe", employeSchema)
module.exports = employe