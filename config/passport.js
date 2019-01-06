

// load all the things we need
var jwt = require('jsonwebtoken');

var LocalStrategy   = require('passport-local').Strategy;

var Data = require('./models/personSchema').Data;

var moment = require('moment-timezone');
var randomString = require('random-string');
var kingbakura = require('darklord-mega');
var Sms = kingbakura.Sms;
var sms = new Sms();
 var head = "InstantPins";
 var admin = {pass:"kofy"};
//var sendgrid  = require('sendgrid')('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');

// expose this function to  our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
console.log('Desilizeing');
    Data.findById(id, function(err, user) {
        console.log('found user: '+user.name);
     //   console.log(user.name);
            done(err, user);
        });

        });






    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup




    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'pnumber',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        var a = req.body.passwordc.length;
        var b = password.length;
        var c =  a+b;

        Data.findOne({ 'phonenumber' :  req.body.pnumber }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That Account is already registered!.'));
            }


            else if(req.body.passwordc!=password){
                return done(null, false, req.flash('signupMessage', ' Password Mismatch! Try Again'));
            }
              else if(req.body.passwordc == password && c<16 ){
                return done(null, false, req.flash('signupMessage', 'Password Too Short 8 characters minimum!'));
            }
            else if(req.body.spassword != admin.pass){
                return done(null, false, req.flash('signupMessage', ' Invalid Admin Password, Access Denied'));
            }
            else {

                // if there is no user with that email
        
                var person = new Data();
 person.name=req.body.name;
 //person.email = req.body.email;
 person.phonenumber = req.body.pnumber;
 //person.provider = req.body.provider;
 person.password = req.body.password;
 person.save(function(err){});
// if  var lang = req.params.lang || 'pt';
 
 return done(null, person);
            }
            

        });

        });

    }));
    
   passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Data.findOne({ 'phonenumber' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'User Not Found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (user.password != password){
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }
            if (user.activated!=true) {
                return done(null, false, req.flash('loginMessage', 'Account Not activated!')); 
            }

            // all is well, return successful user
		
      user.lastlogin =    moment.tz(new Date(), "Africa/Accra");
      user.save(function(err){
        if(err) throw err;
      })


    return done(null, user);

        });


    }));







};
