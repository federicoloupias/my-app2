let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

//create Schema

let ActivitySchema = new Schema({
  title: {
    type: String
  },
  itineraryId:{
   type: Schema.Types.ObjectId,
    ref:'city'
  }
},
{
  collection: 'activities'
});

module.exports = mongoose.model("Activity", ActivitySchema);