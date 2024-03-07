const mongoose = require("mongoose");


const userinput= new mongoose.Schema({
   
    coupleNames:String,
    reasonForWeirdness:String,
    moviesTogether:String,
    yearOfRelationshipMarriage:String,
    currentStatus:String,
    notableEventsControversies:String,
})

const couplemodel = mongoose.model("Couple", userinput)


module.exports=couplemodel;