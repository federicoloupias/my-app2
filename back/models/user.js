let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
      type: String,
      required:true
    },
    email:{
      type: String,
      unique:true,
      required:true
    },
    password:{
      type: String,
      required:true
    },
    firstName:{
      type:String,
      required:true
    },
    lastName:{
      type:String,
      required:true
    },
    country:{
      type:String,
      required:true
    },
    register_date:{
        type:Date,
        default: Date.now
    }
    
    
},
{
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)