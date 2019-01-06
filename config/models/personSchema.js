
var persondb = require('mongoose');
var Schema = persondb.Schema;
var userSchema = persondb.Schema({
        name: String,
        phonenumber: String,
        activated: {type: Boolean, default: true},
      
        lastlogin: Date,

        password: String,
      
        status: {type:String, default:"success"},
    
        admin: {type:Boolean, default:false}
     
       
        

});


var Data = persondb.model('Person', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
