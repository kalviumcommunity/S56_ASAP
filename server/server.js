const express = require('express');
const route=require("./route");
const app = express();
const port = process.env.PUBLIC_PORT || 3000; 

const couplemodel = require("./Model/user")
const cors = require ('cors')
require('dotenv').config()
app.use((cors))

app.get('/ping', (req, res) => {
  res.send('pong');

});
app.use(route);
const mongoose =require('mongoose');
const mongoURI = process.env.URI;


app.get('/getthedata', async (req, res)=>{
let data = await couplemodel.find({})
res.json(data)
})

const connectToDB=async()=>{
  try{
    console.log(mongoURI); 
    await mongoose.connect(mongoURI);
    console.log('connected to mongoDB');
    // process.on('SIGINT', async () => {
    //     await mongoose.disconnect();
    //       console.log('MongoDB disconnected on app termination');
    //       process.exit(0);
    //       });
  } catch(err){
    console.error('error connecting to mongoDB:', err.message);

  }
}


// const disconnectDB =async ()=>{
//   try{
//     await mongoose.disconnect();
//     console.error('disconnect from mongoDB');

//   } catch (err){
//     console.error('error disconnecting from mongoDB:',err.message);
//   }
// }

  if (require.main === module) {
    app.listen(port, () => {
      connectToDB()
      console.log(`🚀 server running on PORT: ${port}`);
    });
  };





