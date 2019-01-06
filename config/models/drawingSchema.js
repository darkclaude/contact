var drawingdb = require('mongoose');
var Schema = drawingdb.Schema;
var tokenSchema = drawingdb.Schema({

		date: Date,
		id: String,
		winners: [],
		earnings: Number,
		premium: Boolean,
		ben: Number,
		mis: Number, 
		table: [], 
		participants: []


      
	
});


var Drawing = drawingdb.model('Draw', tokenSchema);
//var Token = mongoose.model('Token', tokenSchema);

//var Data = persondb.model('Person', userSchema);
//var Token = mongoose.model('Token', tokenSchema);
var Models = {Data: Drawing};
module.exports = Models;