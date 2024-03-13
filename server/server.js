//import statements
const express = require('express');
const route=require("./route");
const mongoose =require('mongoose');
const {couplemodel} = require("./Model/user")
const cors = require ('cors')
require('dotenv').config()
const port = process.env.PUBLIC_PORT || 3000; 
const mongoURI = process.env.URI;
//function call
const app = express();

//middlewares
app.use(cors())


//routes
app.get('/ping', (req, res) => {
  res.send('pong');

});
app.use(route);

app.get('/getdata', async (req, res)=>{ 
  try{

    let data = await couplemodel.find({})
    res.json(data)
  }
  catch( err){
    console.error(err)

  }
}) 


//connections
const connectToDB=async()=>{
  try{
    console.log(mongoURI); 
    await mongoose.connect(mongoURI);
    console.log('connected to mongoDB');
    
  } catch(err){
    console.error('error connecting to mongoDB:', err.message);
    
  }
}

  if (require.main === module) {
    app.listen(port, () => {
      connectToDB()
      console.log(`🚀 server running on PORT: ${port}`);
    });
  };





