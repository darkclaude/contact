
var dumpdb = require('mongoose');
var Schema = dumpdb.Schema;
var userSchema = dumpdb.Schema({
       
      
        type: String,
        amount : {type: Number, default: 0},
        serial: String,
        pin: String,
        udate: Date, 
        usedby: String
     
       
});


var Data = dumpdb.model('Dump', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
