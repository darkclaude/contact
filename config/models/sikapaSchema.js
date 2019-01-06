
var sikapadb = require('mongoose');
var Schema = sikapadb.Schema;
var userSchema = sikapadb.Schema({
       
        amount: {type:String,  default:"0"},   
        pnumber: {type:String, default:"none"},
        provider: {type:String, default:"none"},
        token: {type:String, default: "none"},
        completed: {type: Boolean,default:false}
});


var Data = sikapadb.model('Sikapaa', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
