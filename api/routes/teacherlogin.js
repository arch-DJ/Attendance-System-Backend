const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Teacher = require("../models/teacher");

router.post("/", (req, res, next) => {
  Teacher.findOne({"userid":req.body.userid}).populate({
   path: 'subjects',
   populate: {
     path: 'room',
     model: 'Classroom'
   }}).exec(function (error, data1) {
        if(data1 != null) {
            var ans = data1.password;

            if (ans == req.body.password)  {
              res.status(200);

              res.json(data1);
            }

            else {
                res.status(404);
                res.json({'msg' : 'Error'});
            }

        }
        else{
            res.status(404);
            res.json({'msg' : 'Error'});
        }
    });
});

module.exports = router;
