const express = require("express");
const Courses = require("../model/course");
const bcrypt = require("bcrypt");
const multer = require("multer")
const {mongoose} = require("mongoose");
// Ces lignes importent des modules qui définissent les modèles de données pour les produits et les utilisateurs. Ces modèles sont généralement créés à l'aide de Mongoose pour interagir avec la base de données MongoDB.

// Cette ligne importe le module bcryptjs, qui est utilisé pour le hachage (cryptage) des mots de passe. Il est couramment utilisé pour sécuriser les mots de passe stockés dans la base de données.



exports.AddCourse = async (req, res) => {
  try {
  console.log(req.file);
   
    const course = {
      titre: req.body.titre,
      date: req.body.date,
      hdd: req.body.hdd,
      localisation: {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      },
      description: req.body.description,
      flyer:{src:req.file.path},
  
    };
   
    let newCourse = await new Courses(course);
    newCourse.save();
    console.log(newCourse);
    res.status(200).json(newCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getAllcourses = async (req, res) => {
  try {
    let allCourses = await Courses.find();
   
    if (allCourses.length > 0) {
        res.status(200).json(allCourses);
    }else{
      res.status(400).json({msg: "pas de course"})
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
      }}

      

exports.getOneCourse = async (req, res) => {
        try {
          let id = req.params.id; // elle extrait l'identifiant du produit à obtenir à partir des paramètres de la requête (req.params.id). Cet identifiant est généralement passé dans l'URL de la requête.
          let oneCourse = await Courses.findById(id); // La fonction utilise le modèle Products pour rechercher un produit spécifique dans la base de données en utilisant la méthode findById() de Mongoose, en spécifiant l'identifiant du produit à rechercher.
          res.status(200).json(oneCourse);
        } catch (error) {
          res.status(400).json({ msg: error });
        }
      };

exports.UpdateCourse = async (req, res) => {
 
      try {
          let flyer = req.file.path;
          let course = {
            titre:req.body.titre,
            date:req.body.date,
            hdd:req.body.hdd,
            localisation:{
            longitude:req.body.longitude,
            latitude:req.body.latitude,
            },
            description:req.body.description,
            flyer:{src:flyer},
          };
            // Extrait l'identifiant du produit à mettre à jour à partir des paramètres de la requête (req.params.id), ce qui permet de spécifier quel produit doit être modifié.
            const id = req.params.id
          
            // la fonction utilise Products.updateOne() pour mettre à jour le produit dans la base de données. La méthode updateOne prend deux arguments : le premier est un filtre qui spécifie quel produit doit être mis à jour (en fonction de son identifiant), et le deuxième argument est l'objet product contenant les nouvelles données du produit.
            await Courses.updateOne({"_id": id }, course); // La mise à jour de la base de données est effectuée de manière asynchrone, et si l'opération réussit, elle renvoie une réponse JSON avec un code 200 (OK) indiquant "produit modifié".
            res.status(200).json({msg : "produit modifé"})
        } catch (error) {
            res.status(401).json({msg : error})
        }};



     

exports.DeleteCourse = async (req, res) => {
          try {
            let id = req.params.id;
            await Courses.deleteOne({ "_id": id }); // La fonction utilise le modèle User pour supprimer l'utilisateur de la base de données. Elle utilise la méthode deleteOne() en spécifiant le critère de recherche pour l'élément à supprimer : l'identifiant _id de l'utilisateur.
            res.status(200).json({ msg: "course supprimé" });
          } catch (error) {
            res.status(400).json({ msg: error });
          }
        };
      

