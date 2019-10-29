var express = require('express');

var mongoose = require ('mongoose');

var cors = require ('cors')

var app = express();

mongoose.connect('mongodb+srv://federicoloupias:senillosa1@flcluster-5vsgj.mongodb.net/FLmytinerary?retryWrites=true&w=majority',{useNewUrlParser:true});

var Schema = mongoose.Schema;
var citySchema = new Schema({
    name: String,
    country: String
},
{
    collection: 'cities'
})

var cityModel=mongoose.model('cities', citySchema);

app.get('/api/cities', cors(), function(req, res) {
    cityModel.find()
    .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(err =>{
        console.log(err);
    })
})


app.listen(8080, function(){
    console.log('servidor escuchando puerto 8080')
})