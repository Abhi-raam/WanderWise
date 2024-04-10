const User = require("../model/userModel")


module.exports = {
    createUser:(data)=>{
        return new Promise(async(resolve,reject)=>{
            const findUser = await User.findOne({email:data.email})
            if(!findUser){
                User.create(data).then((data)=>{
                    resolve("login successful")
                })
            }else{
                reject("Email already exist try another email")
            }
        })
    },
    doLogin:(data)=>{
        return new Promise(async(resolve,reject)=>{
            let response = {}
            let user = await User.findOne({email:data.email})
            if(user){
                if(data.password === user.password){
                    console.log("login success");
                    response.userId = user._id
                    response.username = user.name
                    response.email = user.email
                    response.status = true
                    resolve(response)
                }else{
                    reject("login failed try again");
                }
            }else{
                reject("Invalid username or password");
            }
        })
    }
}