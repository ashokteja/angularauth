const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialEventsSchema = new Schema({
    name : String,
    description :String,
    date:String,
    userId:String,
       
});

module.exports = mongoose.model('specialEvents',specialEventsSchema,'specialEvents')