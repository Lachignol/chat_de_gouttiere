const express = require('express');
const Users = require("../model/utilisateur");
const bcrypt = require("bcrypt");
const { mongoose } = require("mongoose");



exports.test = async(req,res)=>{
  try {
    let pseudo = req.body.pseudo;
    res.json({msg:pseudo})
    
  } catch (error) {
    console.log(error)
  }
};

// cette fonction permet d'ajouter un nouvel utilisateur à l'application en utilisant les données reçues dans la requête, de hacher le mot de passe, de les enregistrer dans une base de données et de renvoyer une réponse appropriée en fonction du succès ou de l'échec de l'opération.
exports.AddUser = async (req, res) => {
  try {
    let passwordHash = await bcrypt.hashSync(req.body.password, 10); //  elle utilise le module bcrypt pour hacher le mot de passe fourni dans la requête
    // un objet user est créé à partir des données de la requête (req.body) et du mot de passe haché. Cet objet contient des informations sur l'utilisateur, telles que le prénom, le nom de famille, le nom d'utilisateur, l'e-mail, le mot de passe et le rôle.
    const user = {
      pseudo: req.body.pseudo,
      age: req.body.age,
      mail: req.body.mail,
      password: passwordHash,
    };
    // Un nouvel utilisateur est créé en utilisant le modèle User défini dans le model mongoose avec les données de l'objet user.
    let newUser = await new Users(user);
    newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.GetAllUser = async (req, res) => {
  try {
    let allUser = await Users.find(); // la fonction utilise le modèle User pour rechercher tous les utilisateurs dans la base de données à l'aide de la méthode find() de Mongoose, sans spécifier de critères de recherche. Cela signifie qu'elle récupère tous les utilisateurs enregistrés dans la base de données.
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.GetOneUser = async (req, res) => {
  try {
    let id = req.params.id;
    let oneUser = await Users.findById(id); // La fonction utilise le modèle User pour rechercher un utilisateur spécifique dans la base de données en utilisant la méthode findById(), en spécifiant l'identifiant de l'utilisateur à rechercher.
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.UpdateUser = async (req, res) => {
  const id = req.params.id;
  let passwordHash = await bcrypt.hashSync(req.body.password, 10);
  try {
    const user = {
      pseudo: req.body.pseudo,
      age: req.body.age,
      mail: req.body.mail,
      password: passwordHash,
    };
    await Users.updateOne({ _id: id }, user);
    res.status(200).json({ msg: "Modification effectuée" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    await Users.deleteOne({ _id: id }); // La fonction utilise le modèle User pour supprimer l'utilisateur de la base de données. Elle utilise la méthode deleteOne() en spécifiant le critère de recherche pour l'élément à supprimer : l'identifiant _id de l'utilisateur.
    res.status(200).json({ msg: "user supprimé" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
