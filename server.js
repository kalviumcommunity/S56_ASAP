const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000; // Set a default port if PUBLIC_PORT is not provided

// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('pong');
});
const mongoose =require('mongoose');
const {mongoURI}=require('./config');

const connectToDB=async()=>{
  try{
    await mongoose.connect(mongoURI);
    console.log('connected to mongoDB');
    process.on('SIGINT', async () => {
        await mongoose.disconnect();
          console.log('MongoDB disconnected on app termination');
          process.exit(0);
          });
  } catch(err){
    console.error('error connecting to mongoDB:', err.message);

  }
};

const disconnectDB =async ()=>{
  try{
    await mongoose.disconnect();
    console.error('disconnect from mongoDB');

  } catch (err){
    console.error('error disconnecting from mongoDB:',err.message);
  }
}

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
};

module.exports={
  connectToDB,
  disconnectDB,
  getMongooseConnection: () => mongoose.connection,
};

