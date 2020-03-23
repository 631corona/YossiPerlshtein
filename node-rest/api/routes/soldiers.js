const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    
    res.status(200).json({
        message: 'Get to soldiers route'
    })
});

router.post('/', (req, res, next)=>{
    const soldier = {
        soldierId: req.body.soldierId,
        name: req.body.name, 
        quarantine: req.body.boolean, 
        location: req.body.location
    };
    res.status(201).json({
        message: 'Soldier created successfuly',
        soldier: soldier
    });
});

router.get('/:soldierId', (req, res, next) => {
    const id = req.params.soldierId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You\'re special'
        });
    }
        else{
            res.status(200).json({
                message: 'You get 200'
            });
        };
    });
module.exports = router;
