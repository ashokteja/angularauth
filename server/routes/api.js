const express = require('express');
const router = express.Router();
const User = require('../models/user')

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
})

router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registeredUser)=>{
      if(error){
        console.log(error)
      }else{
        res.status(200).send(registeredUser)
      }
    })
})

router.post('/login',(req,res)=>{
  let userData =  req.body;

    User.findOne({email:userData.email},(error,user)=>{
      if(error){
        console.log(error)
      }
      else{
        if(!user){
          res.status(401).send('Invalid Email')
        }
        else if(user.password !== userData.password){
          res.status(401).send('Invalid Password')
        }
         else{
           res.status(200).send(user)
         }
      }
    })
   
})

router.get('/events',(req,res)=>{
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special',(req,res)=>{
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})


module.exports = router;
