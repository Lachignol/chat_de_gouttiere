
const express = require('express');
const bcrypt = require("bcrypt");
const { ObjectId } = require("bson");
const { mongoose } = require("mongoose");
const Courses = require("../model/course");
const ChronoUsers=require("../model/chrono_user")


exports.addChronoUser = async (req, res) => {
  console.log(req.body.checkpointsOrder)
  let courseId = req.params.id;
  try {
    let chronoUser = {
    userId:req.body.userId,
    userName:req.body.userName,
    checkpointsOrder:req.body.checkpointsOrder.split(";").map((el,i)=>parseInt(el)),
    finaleTime:req.body.finaleTime,
  };
console.log(chronoUser.checkpointsOrder)
  let enterChronoUser = new ChronoUsers(chronoUser);
    let newchronoUser = await Courses.updateOne({"_id": courseId },{$addToSet:{"chrono" :enterChronoUser}})
    console.log(newchronoUser);
    res.status(200).json(newchronoUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

exports.getChronoUsers = async (req, res) => {
  let id = req.params.id;
  try {
    let course =  await Courses.findById(id)
    const chronoUser = course.chrono
    console.log(chronoUser);
    res.status(200).json(chronoUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

exports.DeleteChrono = async (req, res) => {
  try {
    let courseId = req.params.courseId
    let nameOfUser = req.params.nameOfUser;
    await Courses.updateOne({"_id": courseId },{$pull:{"chrono":{ "userName": nameOfUser }}}); 
    res.status(200).json({ msg: "chrono supprimé" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

