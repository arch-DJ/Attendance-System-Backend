const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Teacher = require("../models/teacher");
const Subject = require("../models/subject");
const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const teacher = new Teacher({
    _id: new mongoose.Types.ObjectId(),
    userid: req.body.userid,
    password: req.body.password,
    name: req.body.name,
    department: req.body.department,
    subjects: req.body.subjects
  });
  teacher
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/", (req, res, next) => {
  Teacher.find()
    .populate({
     path: 'subjects',
     populate: {
       path: 'room',
       model: 'Classroom'
     }})
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:teacherId", (req, res, next) => {
  Teacher.findById(req.params.teacherId)
  .populate({
   path: 'subjects',
   populate: {
     path: 'room',
     model: 'Classroom'
   }})
  .exec()
  .then(docs => {
    res.status(200).json(docs);
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
