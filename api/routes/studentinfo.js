const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Student = require("../models/student");
const Subject = require("../models/subject");
const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    userid: req.body.userid,
    password: req.body.password,
    name: req.body.name,
    branch: req.body.branch,
    semester: req.body.semester,
    roll: req.body.roll,
    subjects: req.body.subjects
  });
  student
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
  Student.find()
    .populate('subjects.subject')
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

router.get("/:studentId", (req, res, next) => {
  Student.findById(req.params.studentId)
  .populate('subjects.subject')
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
