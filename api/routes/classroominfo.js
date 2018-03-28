const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const classroom = new Classroom({
    _id: new mongoose.Types.ObjectId(),
    class_name: req.body.class_name,
    height: req.body.height,
    coordinates: req.body.coordinates
  });
  classroom
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
