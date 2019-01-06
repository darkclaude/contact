module.exports = function(router, passport, app) {
	var express = require('express');
	 router.get('/', function(req, res){
	 	//res.render('inst.ejs');
	 	res.redirect('/auth/login');
	 });

	 router.get('/homepage', function(req, res){
		//console.log(req.session);
		//app.use('/profile', express.static(__dirname + '/views'));
		res.render('index.ejs');
	});
	 router.get('/login', function(req,res){
	 	//req.logout();
	 		if(req.isAuthenticated()){
		res.redirect('/dashboard');
	}
	else{
	 	res.render('login4g.ejs', {message: req.flash('loginMessage')});
	 }
	 });
 router.get('/activate', function(req,res){
	 	req.logout();
	 	//req.session.destroy();
	
	 	res.render('activate2g.ejs', {message: req.flash('loginMessage')});
	 
	 });
	 router.post('/login', passport.authenticate('local-login',{
	 	successRedirect: '/dashboard',
	 	failureRedirect: '/auth/login',
	 	failureFlash: true
	 }));


router.get('/signup', function(req, res){
	req.logout()
	res.render('register3g.ejs', {message: req.flash('signupMessage')});

});

router.post('/signup', passport.authenticate('local-signup',{
	successRedirect: '/auth/login',
	failureRedirect: '/auth/signup',
	failureFlash: true
}));
//router.get('/profile', isLoggedIn, function(req, res){
//	res.render('profile.ejs',{user: req.user});
//});
    /*
	 router.get('/:username/:password', function(req, res){// Experimental LOgin Not To Be USed!!!!
	 	var newUser = new User();
         newUser.local.username = req.params.username;
         newUser.local.password  = req.params.password;
         console.log(newUser.local.username + " " + newUser.local.password);
         newUser.save(function(err){
         	if(err) throw err;

         });
         res.send('Success!');
	 });
     */
	 router.get('/logout', function(req, res){
req.logout();
req.session.destroy();
res.redirect('/auth/login');
	 });
	 router.get('/logout2', function(req, res){// Am coming to You??!!!
	 	req.logout();
	 	req.session.destroy();
	 	req.flash('loginMessage', 'Registration Complete Sign In!');
res.redirect('/login');
	 });

};

	 function isLoggedIn(req,res,next){// if Admin already Logged GET to admin-login route redirects to /apanel
	if(req.isAuthenticated()){
		res.redirect('/apanel');
	}
	return next();
}
