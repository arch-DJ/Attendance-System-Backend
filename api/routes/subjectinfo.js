const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Subject = require("../models/subject");
const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const subject = new Subject({
    _id: new mongoose.Types.ObjectId(),
    code: req.body.code,
    sub_name: req.body.sub_name,
    semester: req.body.semester,
    branch: req.body.branch,
    room: req.body.room_id
  });
  subject
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
