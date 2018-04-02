const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Subject = require("../models/subject");

router.put("/:subjectId", (req, res, next) => {
  const id = req.params.subjectId;
  Subject.update({ _id: id }, { $inc : { "total_classes" : 1 }})
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
