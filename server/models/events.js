const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title : String,
    description :String,
    date:Date,
    
});

module.exports = mongoose.model('event',eventSchema,'events')