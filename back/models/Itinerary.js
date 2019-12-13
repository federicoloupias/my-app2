let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

//create Schema

let comentSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
     ref:'user'
   },
   comentario:{
     type: String
   }
})

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
  coments: [comentSchema],
  cityId:{
   type: Schema.Types.ObjectId,
    ref:'city'
  }
},
{
  collection: 'itinerary'
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);