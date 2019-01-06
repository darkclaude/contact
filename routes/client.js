
var Data = require('../config/models/personSchema').Data;
var Card = require('../config/models/cardSchema').Data;
var Dump = require('../config/models/dumpSchema').Data;
var Merchant = require('../config/models/merchantSchema').Data;
var Deposit = require('../config/models/depositSchema').Data;
var Upload = require('../config/models/uploadSchema').Data;
//var MapData = require('../config/models/map');
var formidable = require('formidable');
var randomString = require('random-string');
var fs = require('fs');
//var Client = require('node-rest-client').Client;
var rest = require('restler');
var moment = require('moment');
var utmodel = {
         tfulldate: '',
         tdate: '',
         ttime: '',
         ttype: '',
         tamount: '',
};
var cardmetric = {totalcards: '', totalmerc: '',cardsused:'', depositcomp: '',users: '', valfc:0,valuc:0, sti: 0, stm: 0}
module.exports = function (client) {
    client.post('/getcardsmetric',function(req,res){
           Card.find({},function(err,cards){
                cardmetric.totalcards = cards.length;
                var valfc = 0;
                for(var k of cards){
                    valfc +=k.unitprice;
                    
                }
                cardmetric.valfc = valfc;
                Dump.find({},function(err,dumps){
                 //   var valuc = 0;
                    //var sti =0;
                   // var stm =0;
                
                
                  
                 
                    cardmetric.cardsused = dumps.length;
                    Merchant.find({},function(err,mercs){

                        cardmetric.totalmerc = mercs.length;
                         Deposit.find({'completed': true},function(err,deps){
                            var sti =0;
                            var stm =0;
                             for(var de in deps){
                                 if(deps[de].class=="individual"){
                                     sti += parseFloat(deps[de].amount);

                                 }
                                 else{
                                     stm += parseFloat(deps[de].amount);
                                 }
                             }
                             cardmetric.sti=sti;
                             cardmetric.stm = stm;
                             cardmetric.valuc = sti+stm;

                             cardmetric.depositcomp = deps.length;
                             Data.find({},function(err,users){
                              
                                 cardmetric.users = users.length;
                                 res.json(cardmetric);
                             })
                          //   res.json(cardmetric);
                         })
                       // res.json(cardmetric);
                    });

                });
                


           });
    });

    client.post('/addcard',function(req,res){
    var card = new Card();
     if(req.body.type=="bronze"){
        card.unitprice =0.1;
        card.bulkprice = 0.05;
     }else if(req.body.type=="silver"){
        card.unitprice =0.2;
        card.bulkprice = 0.1;
     }
     else if(req.body.type == "gold"){
        card.unitprice =0.5;
        card.bulkprice = 0.2;
     }
else{}
card.type = req.body.type;
card.pin = req.body.pin;
card.serial = req.body.serial;
console.log(card)
card.save(function(err){});
res.send("done")
    })
  
    client.delete('/deletecard/:ida',function(req, res){
        var id = req.params.ida;
        Card.findByIdAndRemove(id, function (err,card){
            if(err) { throw err; }
            res.send("ok");
        });
        });
        client.delete('/deletemerchant/:ida',function(req, res){
            var id = req.params.ida;
            Merchant.findByIdAndRemove(id, function (err,merchant){
                if(err) { throw err; }
                res.send("ok");
            });
            });
client.get('/getinfo/:user',function(req, res){  // Route for Getting User info

  var user = req.params.user;

  Data.findOne({'username' : user}, function(err,account){
      if(err){
          res.send("Database Error");
          throw err;
      }
else if(account){
        
     res.send(account.username+","+account.balance+","+account.power);
        
    }
      else{
          
          res.send("Account Not Found!");
      }
      
      
  });   
    
});

client.get('/getuserbyid/:id',function(req,res){
    
     Data.findOne({'_id': req.params.id}, function(err, user) {
             res.json(user);
      });
    
});

client.post('/getinfo2/:user',function(req, res){  // Route for Getting User info

  var user = req.params.user;

  Data.findOne({'username' : user}, function(err,account){
      if(err){
          res.send("Database Error");
          throw err;
      }
else if(account){
        
     res.json(account);
        
    }
      else{
          
          res.send("Account Not Found!");
      }
      
      
  });   
    
});
    
client.get('/creditaccount/:user/:amount', function(req, res){       //Route  to Credit User Account
    
   var user = req.params.user;
   var amount = 0;
  
   if(isNaN(req.params.amount)==false){
     amount = parseInt(req.params.amount);
  
    Data.findOne({'username': user}, function(err,account){
        if(err){
        res.send("Database Error!");
         throw err;   
            
        }
        if(account){
            
          //  var total = parseInt(account.balance) + amount;
            if(account.atype=="postpaid"){
            res.send("Cannot Credit A Postpaid!");
            }
            else{
            account.tempc = parseInt(account.tempc)+amount;
             
            account.save(function(err){
                
             if(err){
                 res.send('Database Error');
                 throw err;
                 
             }
                res.send('Account Credited Successfully!');
            
                
            });
                        }
                        }
                else{
                   
                    res.send('Account Not Found!');
                    
                }
                
            
       
                });
  }
  else{

    res.send("Invalid Amount!");
  }
        
        
    });
    
    
    
    
     client.post('/deleteaccount', function(req, res){     //Route to Delete User
        
        var user = req.body.username;
         Data.findOne({ 'username':user }, function(err,r){
                          
                   if(err){
                       res.send("Database Error!");
                       throw err;
                       
                   }
                if(r){

                  
                  Data.findOne({ 'username':user }).remove().exec();
                   res.send("Account Deleted Successfully!");
       

                }
                else{

                  res.send("Account not Found!");
                }

            
            
       
            
        });
        
           
       
            
        });
  

        client.post('/changepass', function(req,res){
    
                Data.findOne({'phonenumber': req.body.user},function(err,user){
                      if(err) throw err;
                    

                       if(user.password == req.body.oldp){
                               user.password =req.body.newp;
                               user.save(function(err){
                                if(err) throw err;
                               });
                               res.send('s1');

                       }

                       else{
                        res.send("e1");
                       }

                });
    
    
    });


            client.post('/setlimit', function(req,res){
    
                Data.findOne({'username': req.body.user},function(err,person){
                      if(err) throw err;
                    
                       if(isNaN(req.body.lowlimit)==true  ||  parseFloat(req.body.lowlimit)<0 ){
                     
                          res.send("e2");   
                             
                       }
                    else{

                        person.lowlimit=parseFloat(req.body.lowlimit);
                             person.save(function(err){
                             if(err) throw err;
                             });
         
                        res.send('kkk');
                  
                    }
                
                });
    });
    
    
    
    
    client.post('/transfer',function(req,res){
       
        var user1 = req.body.user1;
        var user2 = req.body.user2;
        var checkpass = false;
        if(isNaN(req.body.amount)==false && parseInt(req.body.amount)>0){
           var amount = parseInt(req.body.amount);
        Data.findOne({'phonenumber':user1}, function(err,account1){
            
            if(err){throw err};
            if(account1){
                
                
                Data.findOne({'phonenumber':user2}, function(err, account2){
                    
                    if(err){throw err}
                     if(account2){
                        user2='';
                        var now = new Date();
                         if(parseInt(account1.balance)>=amount){
                                utmodel.tfulldate =  now;
                  utmodel.ttime =  moment(now).format('hh:mm a');
                  utmodel.tdate = getFormattedDate(now);
                  utmodel.tamount=amount.toString();
               //   utmodel.ttype = 'Transfer Out';
                               account1.balance = (parseInt(account1.balance)-amount);
                                
                    var newval = parseInt(amount);
                      
                            account2.balance = parseInt(account2.balance)+parseInt(newval);
                    
                    
                             //account2.tempc = (parseInt(account2.tempc)+amount).toString();
                                utmodel.ttype = 'Transfer In';
                  account2.transactions.push(utmodel);
                             account2.save(function(err){
                                 if(err) throw err;
                                      account1.transactions.push(utmodel);
                                      account1.transactions[account1.transactions.length-1].ttype = 'Transfer Out'; 
                                    account1.save(function(err){
                                 if(err) throw err;
                                 
                             });
                             });
                             
                                 rest.get("https://api.smsgh.com/v3/messages/send?From=FreebieX&To="+account1.phonenumber+"&Content="+"Hello! " +account1.name+",\nTransfer Of "+amount+" Cedis to "+account2.name+" Was Succesfully!"+"&ClientId=jbbkrxbk&ClientSecret=inbdqpyo&RegisteredDelivery=false").on('complete', function(result) {
    if (result instanceof Error) {
      console.log('Error:', result.message);
      this.retry(100); // try again after 5 sec
    }
  });
           rest.get("https://api.smsgh.com/v3/messages/send?From=FreebieX&To="+account2.phonenumber+"&Content="+"Hello! " +account2.name+",\nYou have Received "+amount+" Cedis from "+account1.name+"  !"+"&ClientId=jbbkrxbk&ClientSecret=inbdqpyo&RegisteredDelivery=false").on('complete', function(result) {
    if (result instanceof Error) {
      console.log('Error:', result.message);
      this.retry(100); // try again after 5 sec
    }
  });   
                        res.send('Transferred Successfully!');
   
    //  res.json(top); 
                             
                         }
                        else{
                          
                               res.send('inb');  
                               
                            
                           
                            
                        }
                        
                    }
                    
                    else{
                        
                        
                     res.send('dne');
                        
                        
                    }
                    
                    
                });
           
                
            }
            else{

            res.send('One or Both Accounts Doesnt Exist!');
                
            }
          
        });
        
        }
        else{

          res.send("inv");
        }
    });
    
  client.post('/fileupload',function(req,res){
      console.log("FILE HIT");
      console.log(req.files.filename);
      let sampleFile = req.files.filename;
      var buffer = sampleFile.data;
      sampleFile.mv('filename.csv', function(err) {
     
                 var csv = require('csv-to-json');
 
               //  Parses the csv and returns it in JSON format Expected parameters of
                
                 var obj = {
                     filename: 'filename.csv'
                 };
                 csv.parse(obj, function(err, json) {
                     if(err) throw err;
                 console.log(json);
                 
                 for(var j in json){
                    // console.log(json[j].cardserial);
     var card = new Card();
  card.unitprice =json[j].ip;
  card.bulkprice =json[j].mp;
  card.pin = json[j].pin;
  card.id = 9;
  card.serial = json[j].serial;
  card.url = json[j].url;
  card.type= json[j].type;
  card.save(function(err){});
                 }
                 res.redirect('/addcard');
                 
                 });

                 

});
  
});     
    
  client.all("/allusertransactions/:id",function(req, res){
  //var k10 = [{}];
Data.find({'_id': req.params.id}, function(err, user) {
 
     res.json( user);
   });
});
client.all("/allcards",function(req, res){
    //var k10 = [{}];
    Card.find({}).sort('-date').exec(function(err, cards) { 
        res.json( cards);
    });   
     
  });


  client.all("/allorders",function(req, res){
    //var k10 = [{}];
    Deposit.find({}).sort('-date').exec(function(err, deposits) { 
        res.json( deposits);
    });
 
});
  client.all("/alldumps",function(req, res){
    //var k10 = [{}];
    Dump.find({}).sort('-date').exec(function(err, dumps) { 
        res.json(dumps);
    });
   
    client.all("/togglemerchant/:id",function(req, res){
        //var k10 = [{}];
        Merchant.findOne({'_id': req.params.id}, function(err,merchant){
        merchant.activated = !merchant.activated;
        merchant.save(function(err){})
        })
    });
       
        
       
   
    client.post('/registermerchant',function(req,res){
        Merchant.findOne({'phonenumber':req.body.mp},function(err,merc){
          if(merc){
            res.send("already");
          }
          else{
        var merchant = new Merchant();
        merchant.name = req.body.mn;
        merchant.phonenumber = req.body.mp;
        merchant.activated= true;
        merchant.email = req.body.me;
        merchant.provider = req.body.mv;
        merchant.save(function(err){});
        res.send("saved");
          }
      })
      });
     
  });
  client.all("/allmerchants",function(req, res){
    //var k10 = [{}];
    Merchant.find({}).sort('-date').exec(function(err, merchants) { 
        res.json(merchants);
    });
 
   
      
     
  });
    client.all("/usertlist",function(req, res){
  //var k10 = [{}]
Data.find({'phonenumber':  req.body.phonenumber}, function(err, user) {
 
     res.json(user[0].transactions);
   });
});
     client.all("/userwlist",function(req, res){
  //var k10 = [{}]
Data.find({'phonenumber':  req.body.phonenumber}, function(err, user) {
 
     res.json(user[0].withdrawals);
   });
});
        client.all("/userdlist",function(req, res){
  //var k10 = [{}]
Data.find({'phonenumber':  req.body.phonenumber}, function(err, user) {
    
        if(user){
          Deposit.find({'pnumber':user.phonenumber},function(er,depo){
              res.json(depo);
            });
        }
   
   });
});
    
    
    function getFormattedDate(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return month + '/' + day + '/' + year;
}



        
    };
        
    
