const express = require('express');
const router = express.Router();
const data = require('../models/log_model');


router.get('/',(req, res)=>{
    res.status(200).json(data)
})

router.get('/logs/:uuid',(req, res)=>{
    
})