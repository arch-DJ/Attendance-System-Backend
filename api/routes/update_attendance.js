const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Student = require("../models/student");

router.patch("/", (req, res, next) => {
  const ids = req.body.ids;
  const subject = req.body.subject;
  Student.updateMany({"subjects.subject":subject, "_id":{ "$in": ids }},
    { $inc : { "subjects.$.attendance" : 1 }})
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
