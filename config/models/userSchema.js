
var userdb = require('mongoose');
var Schema = merchantdb.Schema;
var userSchema = merchantdb.Schema({
        fullname: String,
        phonenumber: String,
        password: String,
        provider: String,
        activated: Boolean,
        contacts: []
        
        

});


var Data = userdb.model('User', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
