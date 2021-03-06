const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastname:{type:String,required:true},
        email:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const User = mongoose.model("user",userSchema)

module.exports=User
