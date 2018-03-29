const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Student = require("../models/student");

router.post("/", (req, res, next) => {
  Student.findOne({"userid":req.body.userid}).populate('subjects.subject').exec(function (error, data1) {
        if (data1 != null) {
            var ans = data1.password;

            if (ans == req.body.password)  {
              res.status(200);
              res.json(data1);
            }

            else {
                res.status(404);
                res.json({'msg' : 'Wrong password'});
            }

        }
        else {
            res.status(404);
            res.json({'msg' : 'Invalid userID'});
        }
    });
});

module.exports = router;
