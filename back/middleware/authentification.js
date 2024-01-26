const express = require('express');
const bcrypt = require("bcrypt");
const { ObjectId } = require("bson");
const { mongoose } = require("mongoose");
const jwt = require("jsonwebtoken")
const Users = require("../model/utilisateur")

exports.login = async (req, res) => {
  try{
  pseudo = req.body.pseudo;
  console.log(pseudo)
  password = req.body.password;
  console.log(password)
let oneUser = await Users.findOne({pseudo :pseudo});
    if(oneUser){
        console.log(oneUser.password)
    let validPassword = await bcrypt.compare(password, oneUser.password)
    console.log(validPassword)
    if(validPassword){
      const token = jwt.sign({userId: oneUser._id, userName:oneUser.pseudo}, process.env.TOKENSECRET,{expiresIn: Date.now() + (1000 * 60 * 60)})//1 hour
      console.log(token)
      res.status(200).json({token : token , userId : oneUser._id ,userRole : oneUser.role})
      }else{
        console.log("mdp invalide")
        res.status(400).json({msg : "mdp invalide "})
        }
      }else{
  res.status(400).json({msg : 'utilisateur introuvable'})
}}catch(error){
    console.log(error)
}
  };


exports.authenticateUser = async (req, res, next) => {
    const token = req.headers['authorization'];

    console.log(token)
    if (!token) {
      return res.status(401).send('Access Denied. No token provided.');
    }
  
    try {
      const decoded = jwt.verify(token, process.env.TOKENSECRET);
      req.user = decoded;
      console.log(req.user)
      let verifyUser = await Users.findById(req.user.userId)
      console.log(verifyUser)
      if(verifyUser.role == "User")
      next();
    } catch (error) {
      return res.status(400).send('Invalid Token.');
    }
  };

  exports.authenticateAdmin = async (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token)
    if (!token) {
      return res.status(401).send('Access Denied. No token provided.');
    }
   try {
      const decoded = jwt.verify(token, process.env.TOKENSECRET);
      req.user = decoded;
      console.log(req.user)
      let verifyUser = await Users.findById(req.user.userId)
      console.log(verifyUser)
      if(verifyUser.role == "Admin"){
      next()}
      else{
        res.status(400).json({msg : `non admin, votre status ${verifyUser.role}`})
      }
    } catch (error) {
      return res.status(400).send('Invalid Token.');
    }
  };