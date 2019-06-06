const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api',api)

app.get('/',function(req,res){
    res.send('Server is running');
});

app.listen(PORT,function(){
    console.log("server is running on localhost :"+PORT);
})
