const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const classroom = new Classroom({
    _id: new mongoose.Types.ObjectId(),
    class_name: req.body.class_name,
    height: req.body.height,
    coordinates: req.body.coordinates,
    z_coordinate: req.body.z_coordinate
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

router.get("/:roomId", (req, res, next) => {
  Classroom.findById(req.params.roomId)
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
