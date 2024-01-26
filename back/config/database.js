// Cette ligne importe le module mongoose dans votre code. Mongoose est une bibliothèque JavaScript qui permet de travailler avec MongoDB de manière simplifiée.
const mongoose = require('mongoose');
//La fonction connect est utilisée pour établir une connexion à la base de données.
const {connect} = require('mongoose');


//  Cette fonction est asynchrone (marquée par le mot-clé async), ce qui signifie qu'elle peut contenir des opérations asynchrones, comme la connexion à la base de données.
const dbConnexion = async()=> {
    try {
        await mongoose.connect(process.env.DATABASE)
        // Cette ligne de code tente de se connecter à la base de données MongoDB. La fonction mongoose.connect prend en argument une chaîne de connexion à la base de données, qui contient généralement l'URL de la base de données, le nom d'utilisateur et le mot de passe. Si la connexion est établie avec succès, le message "Connexion ok" est affiché à la console.
        console.log('Connexion ok')
    } catch (error) {
        console.log(error)
    }}

// Cette ligne expose la fonction dbConnexion pour qu'elle puisse être utilisée dans d'autres fichiers JavaScript en tant que module. Cela permet à d'autres parties de votre application d'appeler la fonction dbConnexion pour établir la connexion à la base de données.
module.exports = dbConnexion