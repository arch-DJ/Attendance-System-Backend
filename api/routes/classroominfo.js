const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Classroom = require("../models/classroom");

router.post("/", (req, res, next) => {
  const classroom = new Classroom({
    _id: new mongoose.Types.ObjectId(),
    class_name : req.body.class_name,
    xmin: req.body.xmin,
    xmax: req.body.xmax,
    ymin: req.body.ymin,
    ymax: req.body.ymax,
    zmin: req.body.zmin,
    zmax: req.body.zmax
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
