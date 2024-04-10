const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const userFunctions = require("../controller/userController")

router.post('/signup',(req,res)=>{
    userFunctions.createUser(req.body).then((response)=>{
        res.status(200).json(response)
    }).catch((error)=>{
        res.status(409).json(error)
    })
})

router.post('/login',(req,res)=>{
    userFunctions.doLogin(req.body).then((response=>{
        res.status(200).json(response)
    })).catch((error)=>{
        res.status(409).json(error)
    })
})


module.exports = router;
