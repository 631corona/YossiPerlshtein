const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const soldiersRoutes = require('./api/routes/soldiers');
const labRoutes = require('./api/routes/labs');

mongoose.connect('mongodb+srv://yossip:Yossip770@corona-tbp8t.mongodb.net/test?retryWrites=true&w=majority', {
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, DELETE, GET, POST, PATCH');
        return res.status(200).json({});
    }
    next();
})

// Routes
app.use('/labs', labRoutes);
app.use('/soldiers', soldiersRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;
