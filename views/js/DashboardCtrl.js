 var app = angular.module('GYARA', []);
    //var chart;
    
  
app.controller('mainController', ['$scope' ,'$sce','$http', '$interval','$timeout', '$window', function ($scope, $sce,$http, $interval,$timeout, $window) {
    var userid;
    var userobj;
    
 var chart;
 
    var onload = function(){
$http.get('/anggetuser').success(function(response){//Loads ALL DATA when page is first loaded and once
    userid = response;    
       // console.log(response);
        $http.get('/clientapp/getuserbyid/'+userid).success(function(response2){
    userobj = response2;
            //console.log(response2);
        $scope.displayname = userobj.name;
     
    });
    $http.post('/clientapp/getcardsmetric').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
           // $scope.newlimit=0.8;
            $scope.totalcards=response.totalcards;
            $scope.totalmerc = response.totalmerc;
            $scope.cardsused = response.cardsused;
            $scope.depositcomp = response.depositcomp;
            $scope.users = response.users;
            $scope.valfc = response.valfc;
            $scope.valuc = response.valuc;
            $scope.sti = response.sti;
            $scope.stm = response.stm;
          //  $scope.transactionid="";
        
    
        });
        $http.post('/getratio').success(function(response){
            //	$scope.v = "!a";
                //$scope.expired=false;
               // $scope.newlimit=0.8;
                $scope.ratio=response.ratio;
              
              $scope.sold = response.sold;
              $scope.perc = response.perc;
              $scope.dials = response.dials;
              //  $scope.transactionid="";
            
        
            });
      /*  
     $http.post('/clientapp/allretrivals').success(function(response){
        if(response.http.$scope);
     }); 
     */      
	$http.post('/clientapp/alldumps').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.dumplist = t;
        $scope.activeBtn=0;
    
        $scope.dump="";
    
        });
                  
                  
	$http.post('/clientapp/allorders').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.orderlist = t;
        $scope.activeBtn=0;
    
        $scope.order="";
    
        });
	$http.post('/clientapp/allmerchants').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.merchantlist = t;
        $scope.activeBtn=0;
    
        $scope.merchant="";
    
        });
                
	$http.post('/clientapp/allcards').success(function(response){
	//	$scope.v = "!a";
		//$scope.expired=false;
	
		$scope.transactionname="";
		$scope.transactionid="";
		    console.log("GOT IT BIT");
        var t    = new Array;
        t = response;
      //  console.log(response.transactions[0]);
           console.log(response);
		    console.log(response);
    $scope.transactionlist = t.reverse();
    $scope.activeBtn=0;

    $scope.transaction="";

    });

    
 });
 
}
                            onload();// CALLING ONLOAD TO START /EXEC
          
                            if($scope.sha=="en"){
            $interval(function () {// Global Data Update . INT 3 Seconds
               // $scope.lastduc = new Date(userobj.lastduc).toString();
                  $http.get('/clientapp/getuserbyid/'+userid).success(function(response2){
  userobj = response2;
            //console.log(response2);
        $scope.displayname = userobj.name;
        
    });
                  
                  
	$http.post('/clientapp/allorders').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.orderlist = t;
        $scope.activeBtn=0;
    
        $scope.order="";
    
        });
	$http.post('/clientapp/allmerchants').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.merchantlist = t;
        $scope.activeBtn=0;
    
        $scope.merchant="";
    
        });
               
        $http.post('/getratio').success(function(response){
            //	$scope.v = "!a";
                //$scope.expired=false;
               // $scope.newlimit=0.8;
                $scope.ratio=response.ratio;
              //  $scope.ratiop = response.ratiop;
              $scope.sold = response.sold;
              $scope.perc = response.perc;
              $scope.dials = response.dials;
              //  $scope.transactionid="";
            
        
            });
	$http.post('/clientapp/alldumps').success(function(response){
        //	$scope.v = "!a";
            //$scope.expired=false;
        
        //    $scope.transactionname="";
          //  $scope.transactionid="";
                console.log("GOT IT BIT");
            var t    = new Array;
            t = response;
          //  console.log(response.transactions[0]);
               //console.log(transactions);
                console.log(response);
        $scope.dumplist = t;
        $scope.activeBtn=0;
    
        $scope.dump="";
    
        });
               
	$http.post('/clientapp/allcards').success(function(response){
	//	$scope.v = "!a";
		//$scope.expired=false;
	
		$scope.transactionname="";
		$scope.transactionid="";
		    console.log("GOT IT BIT");
        var t    = new Array;
        t = response;
      //  console.log(response.transactions[0]);
           //console.log(transactions);
		    console.log(response);
    $scope.transactionlist = t;
    $scope.activeBtn=0;

    $scope.transaction="";

    });

            
 
                                             
    
      
            }, 10000 * 6);
        }      
        
             
   $scope.topup = function(){



   }
   $scope.currentPage2 = 0; 
   // $scope.expired= false;
    
 $scope.pageSize2 = 50;
 $scope.selectButton2 = function(index) {
 
  }
 $scope.setCurrentPage2 = function(currentPage) {
        $scope.activeBtn2 = currentPage;
    $scope.currentPage2 = currentPage;
 };
 
 $scope.getNumberAsArray2 = function (num) {
    return new Array(num);
 };
 
 $scope.numberOfPages2 = function() {
    return Math.ceil($scope.dumplist.length/ $scope.pageSize2)
 };
 
 
 $scope.currentPage4 = 0; 
 // $scope.expired= false;
  
$scope.pageSize4 = 50;
$scope.selectButton4 = function(index) {

}
$scope.setCurrentPage4 = function(currentPage) {
      $scope.activeBtn4 = currentPage;
  $scope.currentPage4 = currentPage;
};

$scope.getNumberAsArray4 = function (num) {
  return new Array(num);
};

$scope.numberOfPages4 = function() {
  return Math.ceil($scope.orderlist.length/ $scope.pageSize4)
};
 $scope.currentPage3 = 0; 
 // $scope.expired= false;
  
$scope.pageSize3 = 50;
$scope.selectButton3 = function(index) {

}
$scope.setCurrentPage3 = function(currentPage) {
      $scope.activeBtn3 = currentPage;
  $scope.currentPage3 = currentPage;
};

$scope.getNumberAsArray3 = function (num) {
  return new Array(num);
};

$scope.numberOfPages3 = function() {
  return Math.ceil($scope.merchantlist.length/ $scope.pageSize3)
};

   $scope.currentPage = 0; 
  // $scope.expired= false;
   
$scope.pageSize = 50;
$scope.selectButton = function(index) {

 }
$scope.setCurrentPage = function(currentPage) {
       $scope.activeBtn = currentPage;
   $scope.currentPage = currentPage;
};

$scope.getNumberAsArray = function (num) {
   return new Array(num);
};

$scope.numberOfPages = function() {
   return Math.ceil($scope.transactionlist.length/ $scope.pageSize)
};

$scope.remove = function(id){
    console.log(id);
    
        $http.delete('/clientapp/deletecard/' + id).success(function(response){
       // refresh();
    });
}
$scope.remove2 = function(id){
    console.log(id);
    
        $http.delete('/clientapp/deletemerchant/' + id).success(function(response){
       // refresh();
    });
}

$scope.toggle = function(id){
    console.log(id);
    
        $http.get('/clientapp/togglemerchant/'+id).success(function(response){
       // refresh();
    });
}
    
     $scope.addCard = function(){
        var route = "/clientapp/addcard";
        var parameter = JSON.stringify({serial: $scope.cardserial, pin: $scope.cardpin, type:$scope.cardtype});
        console.log("it verks");
           $http.post(route, parameter).
           success(function(response, status, headers, config) {
                   if(response=="done"){//Used by someone
                      swal("Success!", "Succesfully Added Card!", "success");
                      $scope.cardserial= "";
                      $scope.cardpin = "";
                      $scope.cardtype = "";
                   }
                  
               
                  else{
                        swal("Error!", "An Error Occured", "error");
                  }
             }).
             error(function(data, status, headers, config) {
        swal("Error!", "Server/Connection Problem Try Again!", "error");
             });
            }
              
     $scope.registerMerchant = function(){
        var route = "/clientapp/registermerchant";
        var parameter = JSON.stringify({mn: $scope.merchantname, mp: $scope.merchantphonenumber, me:$scope.merchantemail, mv: $scope.merchantprovider});
        console.log("it verks");
           $http.post(route, parameter).
           success(function(response, status, headers, config) {
                   if(response=="saved"){//Used by someone
                      swal("Success!", "Succesfully registered merchant!", "success");
                      $scope.merchantname= "";
                      $scope.merchantemail = "";
                      $scope.merchantphonenumber = "";
                      $scope.merchantprovider ="";
                   }
                  else if(response=="already"){
                    swal("Error!", "This Merchant Already Exists!", "error");
                  }
               
                  else{
                        swal("Error!", "An Error Occured", "error");
                  }
             }).
             error(function(data, status, headers, config) {
        swal("Error!", "Server/Connection Problem Try Again!", "error");
             });

   }     

   $scope.withdraw = function(){
if(isNaN($scope.amount)){
    swal("Error!", "Invalid Amount!", "error");
}else{
var route = "/withdrawal";
 var parameter = JSON.stringify({user: userobj.phonenumber,pnumber: userobj.phonenumber,provider: userobj.provider, amount: $scope.amount});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response.status=="wdip"){//Used by someone
               swal("Not Completed!", "Sorry Another of Your withdrawal in Progress!", "warning");
            }
                else if(response.status=='low'){//Card used by yourself
                swal("Error!", "Insufficient Balance!", "error");
           }
        else if(response.status=='pending'){
                            swal("Pending!", "withdrawal Pending!", "info");
        }
        else if(response.status=='error'){
          swal("Error!", "Unknown Error!", "error");
        }
           else if(response.status=='success'){
              swal("Success!", "withdrawal Succesfull! "+userobj.name+" has been Credited with "+$scope.amount+' Cedi(s)', "success");
           }
           else{
             swal("Error!", "Server/Connection Problem Try Again!", "error");
           }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });

}

   }
     
     	$scope.uploadtometer = function(){
     var route = "/clientapp/uploadtometer";
 var parameter = JSON.stringify({amount: $scope.uploadamount, user: userobj.username});
 console.log("it verks");
            console.log($scope.uploadamount);
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response=="e1"){//cannot borrow
               swal("Error!", "Insufficient Balance!", "error");
            }
            else if(response =="e2"){
                  swal("Error!", "Invalid Balance!", "error");
            }
           else{
           	  swal("Success!", "Succesfully Uploaded "+$scope.uploadamount+" E-Credits to Smart Meter TOP UP Acount", "success");
           }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
	}


	$scope.borrow = function(){
     var route = "/clientapp/borrow";
 var parameter = JSON.stringify({user: userobj.username});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response=="e1"){//cannot borrow
               swal("Error!", "Please Pay Off Previous Debt!", "error");
            }
               
           else{
           	  swal("Success!", "Borrow Succesfull! You have been Credited with 50  Unit(s)", "success");
           }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
	}

  $scope.mpowerCheck = function(){
      var route = "/clientapp/mpowerCheckout";
 var parameter = JSON.stringify({user: userobj.username,amount: $scope.amount});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
      console.log(response);
         
console.log("in here");
// swal("Success!", "Server/Connection Problem Try Again!", "error");
    swal("Please Wait You will be Redirected soon....!");
             window.location= response;
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
  }


    $scope.borrow = function(){
     var route = "/clientapp/borrow";
 var parameter = JSON.stringify({user: userobj.username});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response=="e1"){//cannot borrow
               swal("Error!", "Please Pay Off Previous Debt!", "error");
            }
               
           else{
              swal("Success!", "Borrow Succesfull! You have been Credited with 50  Unit(s)", "success");
           }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
  }
  

   $scope.newlimit = function(){
           console.log("its inside");
      var route = "/clientapp/setlimit";
 var parameter = JSON.stringify({user: userobj.username, lowlimit: $scope.thold});
 //swal($scope.thold);
 //console.log($scope.thold);
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
      console.log(response);
          if(response=="e2"){
           swal("Error!", "Invalid Number, Limit Not Set!", "error");
          }
          else{
             swal("Success!", "New Low Balance Limit Has Been Set To: "+$scope.thold+" E-Credits", "success");
          }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
  }
var isemp = false;
    $scope.changepass = function(){
           console.log("its inside");
      var route = "/clientapp/changepass";
 var parameter = JSON.stringify({user: userobj.phonenumber, oldp: $scope.oldp, newp: $scope.newp1});
 //swal($scope.thold);
 var semi = [$scope.newp1,$scope.newp2,$scope.oldp];

 //console.log($scope.thold);

 for(var i =0;  i<3; i++){
  if((typeof semi[i] == "undefined") || (semi[i] == null)){
  isemp = true;
 }
}
if(isemp==true){
swal("Error!", "Enter Missing Fields!", "error");
}
  else if($scope.newp1.length <8 || $scope.newp2.length <8){
    swal("Error!", "New Password Must be Atleast 8 Characters Long!", "error");
 }
 else if($scope.newp1 != $scope.newp2){
 swal("Error!", "New Passwords Do not Match!", "error");
 }
  else{
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
      console.log(response);
          if(response=="e1"){
           swal("Error!", "Old Password is Incorrect!", "error");
          }
          else{
             swal("Success!", "Your Password has being Changed Successfully", "success");
          }
      }).
      error(function(data, status, headers, config) {
 swal("Error!", "Server/Connection Problem Try Again!", "error");
      });
  }
}





}])
app.filter('startFrom', function() {
    return function(input, start) {         
        return input.slice(start);
};
});


app.filter('filterFor', function(){
    return function(arr, searchName){
        if(!searchName){
            return arr;
        }
        console.log(searchName);
        var result = [];
        searchName = searchName.toLowerCase();
     //  idn = idn.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.usedby.toLowerCase().indexOf(searchName) !== -1 ){
            result.push(item);
        }
        });
        return result;
    };
});
app.filter('filterFor3', function(){
    return function(arr, searchName){
        if(!searchName){
            return arr;
        }
        console.log(searchName);
        var result = [];
        searchName = searchName.toLowerCase();
     //  idn = idn.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.pnumber.toLowerCase().indexOf(searchName) !== -1 ){
            result.push(item);
        }
        });
        return result;
    };
});
app.filter('filterFor2', function(){
    return function(arr, searchName){
        if(!searchName){
            return arr;
        }
        console.log(searchName);
        var result = [];
        searchName = searchName.toLowerCase();
     //  idn = idn.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.phonenumber.toLowerCase().indexOf(searchName) !== -1 ){
            result.push(item);
        }
        });
        return result;
    };
});