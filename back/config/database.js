// Cette ligne importe le module mongoose dans votre code. Mongoose est une bibliothèque JavaScript qui permet de travailler avec MongoDB de manière simplifiée.
const mongoose = require('mongoose');
//La fonction connect est utilisée pour établir une connexion à la base de données.
const {connect} = require('mongoose');


const dbConnexion = async()=> {
    try {
       await mongoose.connect(process.env.DATABASE, {
            writeConcern: {
                w: 'majority',
                wtimeout: 0
            }})
        console.log('Connexion a la BDD ok')
    } catch (error) {
        console.log(error)
    }}

// Cette ligne expose la fonction dbConnexion pour qu'elle puisse être utilisée dans d'autres fichiers JavaScript en tant que module. Cela permet à d'autres parties de votre application d'appeler la fonction dbConnexion pour établir la connexion à la base de données.
module.exports = dbConnexion