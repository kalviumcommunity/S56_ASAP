const express = require('express');
const route = require('./route');
const mongoose = require('mongoose');
const { couplemodel } = require('./Model/user');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.URI;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(route);  

app.put("/update/:id",async(req,res)=>{
  const {id} = req.params;
  console.log(req.body)

  try{
    couplemodel.findByIdAndUpdate({_id:id},req.body)
    .then((res)=>{
      console.log("Video updated successfully",res)
    })
    .catch((err)=>{
      console.error(err)
    })}
    catch(err){
      console.error(err)
    }
})

app.delete('/deleteuser/:id',(req,res)=>{
const id = req.params.id;
couplemodel.findByIdAndDelete({_id:id})
.then(res => res.json(res))
.catch(err => res.json(err))
})


app.get('/getdata', async (req, res) => {
  try {
    let data = await couplemodel.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/post', async (req, res) => {
  try {
    let ans = await couplemodel.create(req.body);
    res.json(ans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Database Connection
const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

// Start server
if (require.main === module) {
  app.listen(port, () => {
    connectToDB();
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app; // Export for testing or future modularization
