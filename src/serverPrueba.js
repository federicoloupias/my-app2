var express = require('express');

var mongoose = require ('mongoose');

var cors = require ('cors')

const bodyParser= require('body-parser')

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://federicoloupias:senillosa1@flcluster-5vsgj.mongodb.net/FLmytinerary?retryWrites=true&w=majority',{useNewUrlParser:true});


let CitesModel = require ('./models/city')



/*city.save()
    .then(doc => {
     console.log(doc)
    })
    .catch(err => {
     console.error(err)
    })*/

   /* CitesModel.findOneAndRemove({
    _id:'5dbafcae97bbc307d7b7070e'
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })*/


app.get('/api/cities', cors(), function(req, res) {
    CitesModel.find()
    .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(err =>{
        console.log(err);
    })
})

app.post('/api/cities', cors(), function(req, res) {
    let newCity = new CitesModel({
        name: req.body.name,
        country: req.body.country
    })
    newCity.save()
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