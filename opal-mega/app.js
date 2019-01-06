var kingbakura= require('./payment');
var MobileMoney = kingbakura.Payment;
var Airtime = kingbakura.Airtime;
var Sms = kingbakura.Sms;
var express = require('express');
var rest = require('restler');
var app = express();
var bodyParser = require('body-parser');
  //var random = require('random-number-generator')
    
      // random integer between 0 and 100 
   // console.log( random(50, 10) ) /

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 

var agent = new MobileMoney("HM0506170010","Basic amJia3J4Yms6aW5iZHFweW8=");
agent.say();
//agent.charge("0270413417","tigo-gh","0.5","http://41.210.18.192:2120/callback",function(response){	console.log(response);});
//console.log(agent.rdata);
var airtime = new Airtime();
airtime.getBalance(function(bal){
console.log(bal);
});
airtime.send("0270413417","1","tigo",function(res){console.log(res);})
/*
var sms = new Sms();
 var head = "FreebieX";
sms.send(head,"0270413417","Hello boy!",function(res){log(res);});

var standardWin =[];
var id;
var wins = 10;
var mux = 1;
var muy = 1;
var nr = true;
var users = 10;
var totalpos = users*5;
var drawpos = Math.floor(users /2);
var tu = [];
for(var i=0; i<users; i++){
	tu.push(0);
}
for(var i=0; i<totalpos; i++){
	standardWin.push(0);
}
var t = Math.floor(drawpos*0.1);
for(var i=0; i<drawpos-t; i++){
      standardWin[random(totalpos)]= random(wins)*mux;

}
for(var i=0; i<t; i++){
      standardWin[random(totalpos)]= randomr(30,50)*mux;

}

log(standardWin);

var o = 0;
var tt =0;
for(var p=1; p<=30; p++){
for(var i=0; i<users; i++){

id = random(totalpos);

if(standardWin[id] !=0){
o= o +1;
//var earnings = 0;

 var one = parseInt(standardWin[id]);
 if(isNaN(standardWin[id])){
 	one = random(wins*mux);
 }
 tt = tt + one;
 tu[i] = tu[i] + standardWin[id];
//log("Person: "+i+" Won: "+standardWin[id]);
}
}
//log(ti);
log("Total Winners : "+o+" Total Amount : "+tt);

earnings = (users*muy*p)-tt;
if(earnings>=0){
log("Total Money in System  : "+users*muy*p+" Total Earnings: +"+earnings);	
}
else{
	log("Total Money in System : "+users*muy*p+" Total Earnings: "+earnings);
}

}
var ov = 0;
var pw = 0;
for(var i =0; i<users; i++){
	log("User "+i+" Total Amount: "+tu[i]);
	if(tu[i]>=30){
		ov++;

	}
}
pw = (ov/users) * 100;
log("Benefactors: "+ov+" Perc Benefactors: "+pw+"%");
app.all('/callback',function(req,res){
log(agent.isSuccess(req.body));
});
*/
      var data = {

 user: '0270413417',
            amount: '1000',
            pnumber: '0270413417',
            provider: 'tigo'
      

  };
    rest.postJson('http://gyara.herokuapp.com/withdrawal',  data).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
        this.retry(100); // try again after 5 sec
      } else {
              //callback(result);
           console.log(result);

      }
    });
function random(num){
	return Math.floor(Math.random() * num);
}

function randomr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function log(msg){
	console.log(msg);
}
app.listen(2120);