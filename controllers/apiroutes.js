const router = require("express").Router()
const db = require("../models");


router.post("/api/users",function(req,res){
    console.log(req.body)
    db.User.create(req.body)
    .then(function(dbrecord){
        console.log("records  created",dbrecord)
        res.json(dbrecord)
    })
})

router.get("/api/users/:email/:password",function(req,res){
    console.log("GET",req.params)
    db.User.findOne({ where:{
        email : req.params.email,

    }})
    .then(function(dbrecord){
        console.log("records  fetched",dbrecord)
        res.json(dbrecord)
    })
})

module.exports = router;