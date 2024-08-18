const express = require("express");
const Courses = require("../model/course");
const bcrypt = require("bcrypt");
const multer = require("multer");
const { mongoose } = require("mongoose");

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
      flyer: { src: req.file.path },
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
    } else {
      res.status(400).json({ msg: "pas de course" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    let id = req.params.id;
    let oneCourse = await Courses.findById(id);
    res.status(200).json(oneCourse);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.UpdateCourse = async (req, res) => {
  try {
    let flyer = req.file.path;
    let course = {
      titre: req.body.titre,
      date: req.body.date,
      hdd: req.body.hdd,
      localisation: {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      },
      description: req.body.description,
      flyer: { src: flyer },
    };
    const id = req.params.id;
    await Courses.updateOne({ _id: id }, course);
    res.status(200).json({ msg: "produit modifé" });
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};

exports.DeleteCourse = async (req, res) => {
  try {
    let id = req.params.id;
    await Courses.deleteOne({ _id: id });
    res.status(200).json({ msg: "course supprimé" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
