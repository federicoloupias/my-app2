var express = require('express');

var mongoose = require ('mongoose');

var cors = require ('cors')

const bodyParser= require('body-parser')

var app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});



//var AuthController = require('./AuthController');

//app.use('/api/auth', AuthController);

app.use('/api/users', require ('./routes/api/users'));

app.use('/api/auth', require ('./routes/api/auth'))



let CitesModel = require ('./models/city')

let ItinerayModel = require ('./models/Itinerary')

let UserModel = require ('./models/user')

const users = require ('./routes/api/users')


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

// -------------------  CITIES  --------------------------//
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
        country: req.body.country,
        url: req.body.url
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
//-------------------------------------------------------//

// -------------------  Itinerary  --------------------------//
app.get('/api/itinerary/:id', cors(), function(req, res) {
  let city = {
    cityId: req.params.id
  }
  
  ItinerayModel.find(city)
  .then(
      function(datos){
          return res.send(datos)
      }
  )
  .catch(err =>{
      console.log(err);
  })
})


app.get('/api/itinerary', cors(), function(req, res) {
  ItinerayModel.find()
  .then(
      function(datos){
          return res.send(datos)
      }
  )
  .catch(err =>{
      console.log(err);
  })
})


//-------------------------------------------------------//

// -------------------  Users  --------------------------//


//-------------------------------------------------------//

app.listen(8080, function(){
    console.log('servidor escuchando puerto 8080')
})