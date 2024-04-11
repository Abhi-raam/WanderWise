const mongoose = require("mongoose")

const bannerImgSchema = new mongoose.Schema({
    file_name : {
        type:String,
        require:true,
    },
    time:{
        type:Date,
        require:true,
    }
})

const Banner = mongoose.model("Banner", bannerImgSchema)
module.exports = Banner