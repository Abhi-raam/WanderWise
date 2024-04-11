const mongoose = require("mongoose")

const traditionalNewsSchema = new mongoose.Schema({
    news_heading : {
        type:String,
        require:true,
    },
    file_name:{
        type:String,
        require:true
    },
    news_description : {
        type:String,
        require:true,
    },
    time : {
        type: Date,
        require:true,
    }
})

const TraditionalNews = mongoose.model("TraditionalNews", traditionalNewsSchema)
module.exports = TraditionalNews