const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const OngoingAttendance = require("../models/ongoing_attendance");

router.get("/", (req, res, next) => {
  OngoingAttendance.find()
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

router.post("/", (req, res, next) => {
  const attendance = new OngoingAttendance({
    _id: new mongoose.Types.ObjectId(),
    subject: req.body.subject
  });
  attendance
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

router.delete("/:attendanceId", (req, res, next) => {
  const id = req.params.attendanceId;
  OngoingAttendance.remove({ _id: id })
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

module.exports = router;
