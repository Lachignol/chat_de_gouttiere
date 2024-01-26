const express = require("express");
const bcrypt = require("bcrypt");
const { ObjectId } = require("bson");
const { mongoose } = require("mongoose");
const Courses = require("../model/course");
const Checkpoints = require("../model/checkpoint");

exports.addCheckpoint = async (req, res) => {
  let courseId = req.params.id;
  try {
    let checkpoint = {
      name: req.body.name,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
    };
    let entercheckpoint = new Checkpoints(checkpoint);
    let newcheckpoint = await Courses.updateOne(
      { _id: courseId },
      { $addToSet: { checkpoints: entercheckpoint } }
    );
    console.log(newcheckpoint);
    res.status(200).json(newcheckpoint);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.DeleteCheckpoint = async (req, res) => {
  try {
    let courseId = req.params.courseId;
    let nameOfCheckpoint = req.params.nameOfCheckpoint;
    await Courses.updateOne(
      { _id: courseId },
      { $pull: { checkpoints: { name: nameOfCheckpoint } } }
    );
    res.status(200).json({ msg: "checkpoint supprimé" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.getCheckpointsInfoBycourseId = async (req, res) => {
  try {
    let id = req.params.id;
    let allFinalTime = await Courses.findById(id);
    const checkpointsInfo = allFinalTime.chrono.map((el) => {
      const obj = {};
      obj["userId"] = el.userId;
      obj["userName"] = el.userName;
      obj["checkpointsInfo"] = el.checkpointsOrder.map(
        (el) => allFinalTime.checkpoints[el - 1]
      );
      return obj;
    });

    // const classementUsers = createObjectClassementUsers.sort((a, b)=> (a.finaleTime > b.finaleTime ? 1 : -1))
    // a utiliser pour ordre decroissant .sort((a, b) => a - b)
    console.log(checkpointsInfo);
    res.status(200).json(checkpointsInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getCheckpointsBycourseId = async (req, res) => {
  try {
    let id = req.params.id;
    let checkpointInfo = await Courses.findById(id);
    const checkpointsInfo = checkpointInfo.checkpoints;

    // .map((el)=>{const obj= {}
    //  obj[`${el.userName}`]=el.userId ; obj["checkpointsInfo"]= el.checkpointsOrder.map(el=>allFinalTime.checkpoints[el-1])
    // return obj });

    // const classementUsers = createObjectClassementUsers.sort((a, b)=> (a.finaleTime > b.finaleTime ? 1 : -1))
    // a utiliser pour ordre decroissant .sort((a, b) => a - b)
    console.log(checkpointsInfo);
    res.status(200).json(checkpointsInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
