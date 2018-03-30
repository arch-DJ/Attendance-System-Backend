const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Subject = require("../models/subject");

router.patch("/:subjectId", (req, res, next) => {
  const id = req.params.subjectId;
  const body = req.body;
  Subject.update({ _id: id }, { $set: body })
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
