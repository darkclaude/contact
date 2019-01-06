
var withdrawaldb = require('mongoose');
var Schema = withdrawaldb.Schema;
var userSchema = withdrawaldb.Schema({
        userphone: String,
        amount: String,    
        pnumber: String,
        provider: String,
        token: String,
        time: Date,
        completed: {type: Boolean, default:false}
});


var Data = withdrawaldb.model('Withdrawal', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Data};

module.exports = Models;
