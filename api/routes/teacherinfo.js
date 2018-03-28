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

module.exports = router;
