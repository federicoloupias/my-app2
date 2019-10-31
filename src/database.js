let mongoose = require('mongoose');


class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect('mongodb+srv://federicoloupias:senillosa1@flcluster-5vsgj.mongodb.net/FLmytinerary?retryWrites=true&w=majority',{useNewUrlParser:true})
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()