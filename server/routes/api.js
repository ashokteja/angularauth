const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


 


const db  = "mongodb+srv://ashokuser:ashokpassword@cluster0-i1giv.mongodb.net/eventsdb?retryWrites=true";

 
mongoose.connect(db,{ useNewUrlParser: true },err=>{
    if(err){
      console.log('error',err)
    }else{
       console.log("mongo connected");
    }

})


router.get('/',function(req,res){
    res.send('From API Route')
});

module.exports = router;
