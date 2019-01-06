
var randomString = require('random-string');
var randomstring = require('randomstring');
var express = require('express');
var app = express();
var configDB = require('./config/database.js');
var Person = require('./config/models/personSchema').Data;
var User = require('./config/models/userSchema').Data;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var sendgrid  = require('sendgrid')();
var path = require('path');
var DateDiff = require('date-diff');
var firebase = require('firebase');
var rest = require('restler');
var kingbakura = require('./opal-mega/payment');
var sikapa = require('darklord-mega')
var admin = require("firebase-admin");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var Client = require('node-rest-client').Client;

var http = require('http');
var server = http.createServer(app);
var socketIO=require('socket.io')
const io = socketIO(server);

require('./config/passport')(passport);
//
//var io = require("socket-io");
//var app = require("express");

// port  = process.env.OPENSHIFT_NODEJS_PORT;
//var port = 2000;

var Slack = require('slack-node');
 
webhookUri = "https://hooks.slack.com/services/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";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
slack.webhook({
  channel: "#nodelogs",
  username: "nodeOpal",
  text: "Server Restarted , Up and Running."
}, function(err, response) {
  console.log(response);
});

var connection_string = ' ';
var moment = require('moment-timezone');
var schedule = require('node-schedule');

// if OPENSHIFT env variables are present, use the available connection info:
 // connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":"+process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +process.env.OPENSHIFT_APP_NAME;
connection_string =process.env.MONGODB_URI;
// if OPENSHIFT env variables are present, use the available connection info:
//  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":"+process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +process.env.OPENSHIFT_APP_NAME;
mongoose.connect(process.env.MONGODB_URI);
app.use(cookieParser());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true }));
//app.use(app.router);

//connection_string= '127.0.0.1:27017';
var upload = require('express-fileupload');
app.use(upload());
app.use(session({secret: 'stealthecookie', saveUninitialized:true, resave: true,  cookie : { secure : false, maxAge : (24 * 60 * 60 * 1000) },store: new MongoStore({  url:connection_string+"/sessions"})}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

 app.use('/dashboard',express.static(__dirname + '/views'));
 
 app.use('/addcard',express.static(__dirname + '/views'));
 app.use('/registermerchant',express.static(__dirname + '/views'));
 app.use('/listcards',express.static(__dirname + '/views'));
 app.use('/listorders',express.static(__dirname + '/views'));
 app.use('/listdumps',express.static(__dirname + '/views'));
 app.use('/home',express.static(__dirname + '/instant'));
 app.use('/faq',express.static(__dirname + '/views'));
 app.use('/contact',express.static(__dirname + '/views'));
 app.use('/listmerchants',express.static(__dirname + '/views'));
 app.use('/auth',express.static(__dirname + '/views'));
 app.use('/full',express.static(__dirname + '/views'));
app.use('/portal',express.static(__dirname + '/views'));
app.use('/topup',express.static(__dirname + '/views'));
app.use('/iportal',express.static(__dirname + '/views'));
app.use('/broadcaster',express.static(__dirname + '/views'));
app.use('/transfer',express.static(__dirname + '/views'));
app.use('/withdraw',express.static(__dirname + '/views'));
app.use('/transactions',express.static(__dirname + '/views'));
app.use('/settings',express.static(__dirname + '/views'));
var secure = express.Router();
var auth= express.Router();
var formidable = require('formidable');
require('./routes/auth.js')(auth, passport,app);
var ua = require('universal-analytics');
var clientr = express.Router();
var visitor = ua('UA-107715939-1');


visitor.pageview("/").send()
app.use('/auth',auth);
require('./routes/secure.js')(secure,app, passport);
app.use('/clientapp',clientr);
require('./routes/client')(clientr);
//app.use('/',express.static(__dirname + '/views'));
app.set('view engine','ejs');
//mongoose.connect("mongodb://"+connection_string+"/person");
//mongoose.connect(configDB.url2);
//persondb = mongoose.createConnection("mongodb://localhost:27017/persons");
uploaddb = mongoose.createConnection("mongodb://"+connection_string+"/uploads");
persondb = mongoose.createConnection("mongodb://"+connection_string+"/users");
carddb = mongoose.createConnection("mongodb://"+connection_string+"/cards");
merchantdb = mongoose.createConnection("mongodb://"+connection_string+"/merchants");
dumpdb = mongoose.createConnection("mongodb://"+connection_string+"/dumps");
var personroute = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
 var head = "FreebieX";
// parse application/json 
app.use(bodyParser.json())
 var head = "Gyedi";//"InstantPins";
var pt = '/';
var pt2 = false;
var utmodel = {
         tfulldate: '',
         tdate: '',
         ttime: '',
         ttype: '',
         tamount: '',
};


function getKey(key){

  redisclient.get(key,  function(err, reply) {
     // reply is null when the key is missing
     console.log(reply);
     return reply;
 });
}

//
//calls();
app.get('/faq',function(req, res){
	res.render('faq.ejs');
});
app.get('/home',function(req, res){
 res.sendFile(path.join(__dirname + '/instant/home.html'));
});


app.get('/contact', function(req,res){
   res.render('contact_us.ejs');
});


app.get('/full', function(req,res){
  res.render('fullpage.ejs');
});

app.get('/iportal',function(req, res){
	res.render('iportal.ejs');
});

app.get('/broadcaster', function(req,res){
   res.render('broadcast.ejs');
});


         /*
slack.webhook({
  channel: "#nodelogs",
  username: "nodeOpal",
  text: trans.pnumber+" : OUT OF CARDS ERROR"
}, function(err, response) {
  console.log(response);
});
*/
    
app.post('/app/register',(req,res) => {
  var fullname = req.body.fullname;
  var phonenumber = req.body.phonenumber;
  var password = req.body.password;
  var provider = req.body.provider;
  var activated = true;

  User.findOne({'phonenumber': phonenumber},(err,user)=>{
     if(user){
       res.json({status:'already'})
     }
     else{
       var newUser = new User();
       newUser.fullname = fullname;
       newUser.phonenumber =phonenumber;
       newUser.password = password;
       newUser.provider = provider;
       newUser.activated = activated;
       newUser.save(function(err){
         if(err){
           console.error(err);
         }
         else{
           res.json({status:'success'});
         }
       })
     }
  })
  

});



//var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(process.env.PORT || process.env.port);


io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('update', (msg)=>{ 
    console.log(msg);
    io.emit('feedback',msg);

  });
});


setInterval(() => io.emit('time', new Date().toTimeString()), 200);
//setInterval(() => io.emit('message', new Date().toTimeString()+"Message"), 00);
//setInterval(() => io.emit('time', new Date().toTimeString()), 10);
//setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

//app.listen(port, process.env.OPENSHIFT_NODEJS_IP);
