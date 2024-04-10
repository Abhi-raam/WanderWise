const mongoose = require("mongoose")

const connectDatabase=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/cityscout")
}

module.exports = connectDatabase


// // database.js
// const mongoose = require("mongoose");

// const connectDatabase = () => {
//     mongoose.connect("mongodb://127.0.0.1:27017/cityscout", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true, // This ensures that indexes are created in MongoDB for any unique fields in your schemas.
//     });

//     const db = mongoose.connection;

//     db.on("error", console.error.bind(console, "MongoDB connection error:"));
//     db.once("open", () => {
//         console.log("Connected to MongoDB database");
//     });
// };

// module.exports = connectDatabase;
