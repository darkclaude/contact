
var carddb = require('mongoose');
var Schema = carddb.Schema;
var userSchema = carddb.Schema({
       
        unitprice: Number,
        bulkprice: Number,     
        type: String,
        serial: String,
        pin: String,
        id: Number,
        url: {type: String, default:'none'}
        
       
});


var Data = carddb.model('Card', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
