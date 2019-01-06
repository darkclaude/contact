function ManagerCtrll($scope, $sce,$http, $interval,$timeout, $window) {
  $scope.type = "No";
document.getElementById("actkey").readOnly = true;
   $scope.activate = function(){
console.log($scope.type);
var route = "/activate";
 var parameter = JSON.stringify({idn: $scope.unique, type: $scope.type});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response=="notfound"){

                $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+' Unique ID Does Not Exist!'+'</div>');
            }

                // $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success!</strong> '+' Hello! '+response.name+'<br>License Created  On: <strong>'+response.created+'<br>'+'License Expires On: '+response.expiry+'</strong> <br>'+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'<br>TIME(Min:Sec) Left before Expiration: '+'Expired Renew!'+'</div><>');
         else if(response=="already"){
           $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+' Unique ID Account Already Activated!'+'</div>');

         }
      
                    else{
          $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success!</strong>'+"Key Generated! Sent to Client!"+'</div>');
            $scope.actkey=response;

     }

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });



   }


$scope.renew = function(){

var route = "/renewlicense";
 var parameter = JSON.stringify({idn: $scope.idn2});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
      var haze = "No";
      var raze1 = "No";
      var raze2 = "No";
      console.log(response);
            if(response=="notfound"){

                $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+' Driver ID Does Not Exist!'+'</div>');
            }

                else{
                  if(response.expired==true){
                    haze = "Yes";
                  }
                  if(response.reneweda==true){
                    raze1 = "Yes";
                  }
                  if(response.renewedb==true){
                    raze2= "Yes";
                  }
                  if(response.type=="a"){
                 $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success! First Renewal Successfull!</strong> '+'Hello! '+response.name+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>'+'License Expires On: '+response.expiry+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'</div>');
     }
     else if(response.type=="b"){
       $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success! Second Renewal Successfull!</strong> '+'Hello! '+response.name+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>'+'License Expires On: '+response.expiry+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'</div>');
     }
     else if(response.type=="c"){
       $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+'Hello! '+response.name+', All Renewals Have being done Already! License Not Expired.'+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>'+'License Expires On: '+response.expiry+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'</div>');

     }
  else if(response.type=="d"){
     $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+'Hello! '+response.name+', All Renewals Have being done Already! License Has Expired Get new License!.'+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>'+'License Expires On: '+response.expiry+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'</div>');
  }
     else {
         $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+'Hello! '+response.name+', No Renewal Due Yet! '+'<br>License 1st Renewal due Date : '+response.renewa+'<br>'+'License 2nd Renewal  due Date: '+response.renewb+'<br>'+'License Expires On: '+response.expiry+'<br>Has done 1st Renewal: '+raze1+'<br>Has done 2nd Renewal: '+raze2+'<br>Has Expired: '+haze+'</div>');
   }
 }

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });




}
}
