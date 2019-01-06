
var depositdb = require('mongoose');
var Schema = depositdb.Schema;
var userSchema = depositdb.Schema({
       
        amount: String,    
        pnumber: String,
        provider: String,
        token: String,
        type: String, 
        class: {type: String,default:'individual'},
        quantity: {type: Number, default:1},
        date: Date,
        gateway : String,
        completed: {type: Boolean,default:false},
        refund : {type: Boolean, default:false}
});


var Data = depositdb.model('Deposit', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
