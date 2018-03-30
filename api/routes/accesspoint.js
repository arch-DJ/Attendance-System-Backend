const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const AP = require("../models/accesspoint");

router.get("/", (req, res, next) => {
  AP.find()
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
  const ap = new AP({
    _id: new mongoose.Types.ObjectId(),
    ssid: req.body.ssid,
    bssid: req.body.bssid,
    x: req.body.x,
    y: req.body.y,
    z: req.body.z
  });
  ap
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
