const mongoose = require('mongoose');

const labsSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    status: String, 
    progress_percentile: Number
});

module.exports = mongoose.model('Labs', labsSchema);