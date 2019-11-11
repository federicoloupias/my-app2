let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

//create Schema

let ItinerarySchema = new Schema({
  title: {
    type: String
  },
  profilePic: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtags: {
    type: Array
  },
  cityId:{
   type: Schema.Types.ObjectId,
    ref:'city'
  }
},
{
  collection: 'itinerary'
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);