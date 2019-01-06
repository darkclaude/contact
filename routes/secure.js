 var express = require('express');
 var re;
 var pt = 'NOT AVAILABLE';
 var state = 'o';
 module.exports = function(router,app,passport){
router.use(function(req, res, next){
	//re = req;

		if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/home');
	
});

router.get('/settings', function(req, res){
res.redirect('/dashboard')
	//app.use('/dash', express.static(__dirname + '/views'));
//	res.render('settings.ejs');
});

router.get('/homepage', function(req, res){
	//console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('index.ejs');
});
router.get('/dashboard', function(req, res){
	//console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('dashboard.ejs');
});
router.get('/topup', function(req, res){
	//console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('topup.ejs');
});

     router.get('/borrow', function(req, res){
	//app.use('/dash', express.static(__dirname + '/views'));
	res.render('borrow.ejs');
});
router.get('/addcard', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('addcard.ejs');
});
router.get('/listdumps', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('listdumps.ejs');
});
router.get('/listorders', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('manageorders.ejs');
});
router.get('/listmerchants', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('listmerchants.ejs');
});
router.get('/registermerchant', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('registermerchant.ejs');
});
     router.get('/topup', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('topup.ejs');
});
     router.get('/topupr', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('topupr.ejs');
});
          router.get('/withdraw', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('withdraw.ejs');
});
        router.get('/listcards', function(req, res){
	console.log(req.session);
	//app.use('/profile', express.static(__dirname + '/views'));
	res.render('listcards.ejs');
});
router.get('/house', function(req, res){
res.render('house.ejs');
});
router.get('/usage', function(req, res){
res.render('usage.ejs');
});

router.get('/anggetuser', function(req, res){
res.send(req.session.passport.user);
});

//router.get('/403', function(req, res){
//	console.log(req.session);
//	//app.use('/403', express.static(__dirname + '/views'));
//	res.render('na.ejs');
//});


router.post('/value', function(req, res){
res.send(pt);
});


	 router.get('/logout', function(req, res){
req.logout();
res.redirect('/');
	 });


//router.get('')

 };
