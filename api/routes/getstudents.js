const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Student = require("../models/student");

router.get("/:subjectId", (req, res, next) => {
  const subjectid = req.params.subjectId;
  Student.find({"subjects.subject" : subjectid})
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
