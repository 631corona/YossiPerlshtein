const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Labs = require('../models/labs');
var labData = require('../data/labs');

router.get('/', (req, res, next)=>{
    res.send(labData)
});

router.get('/:labName', (req, res, next) => {
    labName = labs.find(labData => labData.name == req.body.name);
    res.send(labName);
    });
    
module.exports = router;

