function createAccountCtrl($scope, $http, $sce) {
//showdialog
$scope.showmain = function(){
$scope.t= true;
console.log("button clicked!");



}


//create
$scope.create = function(){
var user = $scope.username1;
var amount = $scope.amount1;
var route = '/clientapp/createaccount/'+user+'/'+amount;
console.log(route);
$http.get(route).success(function(data){

 console.log(data);
 alert(data);
 $scope.username1= "";
 $scope.amount1="";

	});

}

//buy credit
$scope.addCredit = function(){
var user = $scope.username2;
var amount = $scope.amount2;
var route = '/clientapp/creditaccount/'+user+'/'+amount;
$http.get(route).success(function(data){

 console.log(data);
 alert(data);
 $scope.username= "";
 $scope.amount="";
	});
}


//show generatedkey
$scope.generatekey= function(){
var amount = $scope.amount3;
var route = '/clientapp/generatekey/'+amount;
$http.get(route).success(function(data){


 if(isNaN(data)==false){
 	alert("Recharge Key Generated Succesfully!");
 $scope.show_generated_key= data;
 $scope.amount3 = "";
 }
 else{
  console.log(data);
   alert(data);
 }



	});
}

//user profile
//scope.show = true;
$scope.get_info = function(){

var user = $scope.username3;
var route = '/clientapp/getinfo2/'+user;
$http.get(route).success(function(data){
$scope.v = true;
 if(isNaN(data.balance)==false){
 $scope.bootalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success!</strong> Account Info Operation Succesfull!</div>');
 $scope.username4= data.username;
 $scope.balance1= data.balance;
$scope.power1 = data.power;
}
else{
 $scope.bootalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Failure!&nbsp</strong>'+data+'</div>');
 $scope.username4= "";
 $scope.balance1="";
$scope.power1 = "";
}

});


}


//delete account
$scope.delete_account = function(){
	var user = $scope.username5;
var route = '/clientapp/deleteaccount/'+user;

$http.get(route).success(function(data){

 console.log(data);
 alert(data);
 $scope.username5= "";

});
}



//transfer account

$scope.transfer = function(){
	var sender = 	$scope.s_username;
	var receipient = $scope.r_username;
		var amount = $scope.amount4;
var route = '/clientapp/tranfer/user1/user2/amount';
$http.get(route).success(function(data){
console.log(data);
 alert(data);

$scope.s_username  = "";
$scope.r_username = "";
$scope.amount4 = "";
});

}


}