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
    }
    
    
},
{
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)