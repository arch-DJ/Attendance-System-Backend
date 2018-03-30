const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const TempAttendance = require("../models/temp_attendance");

router.post("/", (req, res, next) => {
  const temp_attendance = new TempAttendance({
    _id: new mongoose.Types.ObjectId(),
    subject: req.body.subject,
    student: req.body.student
  });
  temp_attendance
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

router.delete("/:subjectId", (req, res, next) => {
  const subject = req.params.subjectId;
  TempAttendance.remove({ "subject": {'$in':subject} })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:subId", (req, res, next) => {
  const subject = req.params.subId;
  TempAttendance.find({"subject" : subject})
    .select("student _id")
    .populate('student')
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
