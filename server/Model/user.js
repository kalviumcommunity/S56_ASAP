const mongoose = require("mongoose");
const Joi = require("joi");

// Define Mongoose schema
const coupleSchema = new mongoose.Schema({
    coupleNames: { type: String, required: true },
    reasonForWeirdness: { type: String, required: true },
    moviesTogether: { type: String, required: true },
    yearOfRelationshipMarriage: { type: String, required: true },
    currentStatus: { type: String, required: true },
    notableEventsControversies: { type: String, required: true },
    user: {type: String}
});

const userSchema=new mongoose.Schema( {
    user: {type:String}
})

// Define Joi validation schema
const coupleValidationSchema= (couples)=>{ 
    const schema = 
    Joi.object({
    coupleNames: Joi.string().required(),
    reasonForWeirdness: Joi.string().required(),
    moviesTogether: Joi.string().required(),
    yearOfRelationshipMarriage: Joi.string().required(),
    currentStatus: Joi.string().required(),
    notableEventsControversies: Joi.string().required()
});
    return schema.validate(couples)
}

// Create Mongoose model
const coupleModel = mongoose.model("Couple", coupleSchema);
const userModel=mongoose.model("users",userSchema )

// Export the model and validation function
module.exports = { coupleModel, coupleValidationSchema,userModel };
