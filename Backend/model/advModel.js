const mongoose = require("mongoose")

const advImgSchema = new mongoose.Schema({
    url : {
        type:String,
        require:true,
    },
    file_name : {
        type:String,
        require:true,
    },
    time:{
        type:Date,
        require:true,
    }
})

const Advertisement = mongoose.model("Advertisement", advImgSchema)
module.exports = Advertisement