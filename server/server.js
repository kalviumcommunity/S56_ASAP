const express = require('express');
const route = require('./route');
const mongoose = require('mongoose');
const { coupleModel,coupleValidationSchema } = require('./Model/user');
const cors = require('cors');
require('dotenv').config();
// const {validate} = require("joi")

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

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    const updatedCouple = await coupleModel.findByIdAndUpdate({ _id: id }, req.body);
    console.log("Couple updated successfully", updatedCouple);
    res.json(updatedCouple); // Send back the updated couple
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/deleteuser/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCouple = await coupleModel.findByIdAndDelete({ _id: id });
    console.log("Couple deleted successfully", deletedCouple);
    res.json(deletedCouple); // Send back the deleted couple
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/getdata', async (req, res) => {
  try {
    let data = await coupleModel.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/post', async (req, res) => {
  const validation = coupleValidationSchema(req.body)
  if(validation.error){
    return res.status(400).json({error: validation.error.details[0].message})
  }
  try {
    let ans = await coupleModel.create(req.body)
    .then((el)=>{
      res.json(el)
    })
  } catch (error) {
    console.error(error);
    res.send(error)
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
