const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
    file_name : {
        type:String,
        require:true,
    },
    details:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    time:{
        type:Date,
        require:true,
    }
})

const Destination = mongoose.model("Destination", destinationSchema)
module.exports = Destination