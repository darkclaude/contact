
var uploaddb = require('mongoose');
var Schema = uploaddb.Schema;
var userSchema = uploaddb.Schema({
       
        data: Buffer,
        used: Boolean,    
        name: String
   
});


var Data = uploaddb.model('upload', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
