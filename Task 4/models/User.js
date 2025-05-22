const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
name:{
    type:String,
    requied: true,
},
email:{
    type:String,
    required: true,
    unique: true
},
age:{
    type: Number,
    required: true

}

});
const User= mongoose.model("User",userSchema);
module.exports=User;