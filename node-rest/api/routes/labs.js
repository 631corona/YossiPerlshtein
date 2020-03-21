const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    const lab = {
        name: req.body.mane,
        status: req.body.status
    }
    res.status(200).json({
        message: 'Get to Labs route',
        lab: status
    })
});

router.get('/:labID',(req, res, next)=>{
    const id = req.params.labID;
    res.status(200).json({
        message: 'You passed an labID, good for you.',
        id: id
    });
});
module.exports = router;

