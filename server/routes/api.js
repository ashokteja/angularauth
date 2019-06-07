const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');


const mongoose = require('mongoose');
const db  = "mongodb+srv://ashokuser:ashokpassword@cluster0-i1giv.mongodb.net/eventsdb?retryWrites=true";
 
mongoose.connect(db,{ useNewUrlParser: true },err=>{
    if(err){
      console.log('error',err)
    }else{
       console.log("mongo connected");
    }

})

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}



router.get('/',function(req,res){
    res.send('From API Route')
})

router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registeredUser)=>{
      if(error){
        console.log(error)
        res.send({statusCode :400,message:'error'})
      }else{
        //let payload = {subject:registeredUser._id};
        //let token   = jwt.sign(payload,'secretKey');
        res.send({statusCode :200,message:'success'});
      }
    })

    
})



router.post('/login',(req,res)=>{
  let userData =  req.body;

    User.findOne({email:userData.email},(error,user)=>{
      if(error){
        res.send({statusCode :401,message:'Email is not exists'})
      }
      else{
        if(!user){
          res.send({statusCode :401,message:'Invalid Email'})
        }
        else if(user.password !== userData.password){
          res.send({statusCode :401,message:'Invalid Password'})
        }
         else{
           let payload =  {subject:user._id};
           let token   = jwt.sign(payload,'secretKey');
           res.send({statusCode :200,token:token})

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

router.get('/special', verifyToken, (req,res)=>{
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
