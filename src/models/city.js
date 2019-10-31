let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let citySchema = new Schema({
    name: String,
    country: String
},
{
    collection: 'cities'
})

module.exports = mongoose.model('Cities', citySchema)