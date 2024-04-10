const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    news_heading : {
        type:String,
        require:true,
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

const News = mongoose.model("News", newsSchema)
module.exports = News