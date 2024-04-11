const express = require("express")
const cors = require("cors")
// const session = require('express-session')
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/database")
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const app = express()

app.use(express.json())
app.use(express.static("uploads"))
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials : true,
}))
app.use(express.urlencoded({extended:true}))
// app.use(session({secret:"zyfarer",cookie:{maxAge:60000}}))

app.use("/api/user",userRoute)
app.use('/api/admin',adminRoute)

const PORT = 3000
app.listen(PORT,()=>{console.log(`server running in port ${PORT}`);})

connectDatabase()



