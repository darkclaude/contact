var rest = require('restler');
var Client = require('node-rest-client').Client;
var Mobilemoney = function(account,key,cedikey){
  //this.
this.pid = 'H';
this.merchantno=account;
this.authkey = key;
this.rdata ="k";
if(cedikey){
this.cedikey = cedikey;
}
else{
  this.cedikey = '';
}
var rdata="k";
   Mobilemoney.prototype.refund = function(id,amount,reason,full){
    var args = {
      data: { "TransactionId": id,
       "Reason":reason,
    "Amount": amount,
    "Full": full,
    "Description": "Mobile Reversal/~Refund",
    "ClientReference": ""},
     headers: {
             "Host": "api.hubtel.com",
            "Accept": "application/json",
            "Content-Type": "application/json",          
            "Authorization": this.authkey,
            "Cache-Control": "no-cache"
        }
  };
  postData(this.merchantno);
  function postData(merchantno){
   var client = new Client();
  url = "https://api.hubtel.com/v1/merchantaccount/merchants/"+merchantno+"/transactions/refund";
  console.log(url);
  client.post(url, args, function (data, response) {
    //.log(data);     
    console.log(data);
     callback(data);
  });
   }
  }
  Mobilemoney.prototype.charge = function(number,provider,amount,url,callback){
//var rdata;
if(this.pid=='H'){
     var args = {
    data: { "CustomerName": number,
  "CustomerMsisdn": number,
  "CustomerEmail": "",
  "Channel": provider,
  "Amount": amount,
  "PrimaryCallbackUrl": url,
  "Description": "Mobile Charge",
 // "FeesOnCustomer": true,
  "ClientReference": ""},
   headers: {
   	      "Host": "api.hubtel.com",
          "Accept": "application/json",
          "Content-Type": "application/json",          
          "Authorization": this.authkey,
          "Cache-Control": "no-cache"
      }
};
postData(this.merchantno);
function postData(merchantno){
 var client = new Client();
url = "https://api.hubtel.com/v1/merchantaccount/merchants/"+merchantno+"/receive/mobilemoney";
console.log(url);
client.post(url, args, function (data, response) {
  //.log(data);     
  console.log(data);
  try{
    if(data.Errors[0].Messages){
  console.log(data.Errors[0].Messages);
    }
  }catch(error){
    console.log(error);
  }
   callback(data);
});
}
}
else if(this.pid=='C'){

    var   datacd = { action: "sendbill",
    wallet: number,
    description: "Cediplus Richtech Main Server",
    amount: amount,
    callback: url,
    api_key: this.cedikey,              // "fdc9a31c8f361b482bf59077ca81b9eb",
    wallet_type : "nill"};
    if(provider.indexOf('tigo')>=0 || provider.indexOf('airtel')>=0){
    datacd.wallet_type = 't';
    }
    if(provider.indexOf('mtn')>=0){

   datacd.wallet_type = 'm';
    }
    // "FeesOnCustomer": true,
  
      
  rest.post('http://richpayplus.herokuapp.com/v1/api', {
    data: datacd,
  }).on('complete', function(data, response) {
    if (response.statusCode == 200) {
      console.log(data);
       data = JSON.parse(data);
       data['gateway']=this.pid;
       callback(data);
    }
    
    });             
      
}
}

Mobilemoney.prototype.isSuccess = function(res){
console.log(res)
if(res.ResponseCode == '0000' || res.ResponseCode == 200){
	return true;
}
else {
	return false;
}

}




  
  Mobilemoney.prototype.say = function(){
	console.log("Hello");
}







}

var Airtime = function(){

	Airtime.prototype.send = function(number,amount,provider,callback){
                 var mapperN = ["AIRTEL",'VODAFONE','MTN','TIGO'];
  var mapperID = ["62006","62002","62001","62003"];
  var idp;
  for(var i =0; i<=3; i++){
    if(provider.toUpperCase()==mapperN[i]){
      idp = mapperID[i];
      break;
    }
  }
var data = {
      network: idp,
      amount: amount,
      phone: number,
      token: "58523f16-c68a-45c8-aba4-f48ec050192b"

  };
    rest.postJson('http://api.smsgh.com/usp/airtime',  data, {headers : { Authorization:"Basic amJia3J4Yms6aW5iZHFweW8=" }}).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
        this.retry(100); // try again after 5 sec
      } else {
              callback(result);
           // console.log(result);

      }
    });
	}


  Airtime.prototype.getBalance= function(callback){
    
var data = {
    
      token: "58523f16-c68a-45c8-aba4-f48ec050192b"

  };

     var args = {
    data:{},

   headers: {
          "Host": "api.smsgh.com",
          "Accept": "application/json",
                
          "Authorization": "Basic amJia3J4Yms6aW5iZHFweW8=" 

      
      }
};
getData(data.token);
function getData(dt){
 var client = new Client();
url = "http://api.smsgh.com/usp/balance/"+dt;
console.log(url);
client.get(url, args, function (data, response) {
  //.log(data);     
  console.log(data);
 var bal= "";
 for(var i =4; i<data.AccountBalance.length; i++){
  bal += data.AccountBalance.charAt(i);
}
 // console.log(response);
   callback(bal);
});
}
}
}







  var Sms = function(){ 

    Sms.prototype.send = function(header,number,content,callback){
    
    rest.get("https://api.smsgh.com/v3/messages/send?From="+header+"&To="+number+"&Content="+content+"&ClientId=eltsbxvg&ClientSecret=gzlrerxd&RegisteredDelivery=false").on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
    
        this.retry(100); // try again after 5 sec
      } else {
      
        callback(result);
      }
    
      
    });
    
  }
    



}
module.exports = {Payment: Mobilemoney, Airtime : Airtime, Sms : Sms};