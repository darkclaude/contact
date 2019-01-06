function BroadcastCtrl($scope, $sce,$http, $interval,$timeout, $window) {


   $scope.sendBroadcast = function(){

var route = "/broadcast";
 var parameter = JSON.stringify({msg: $scope.msg,title: $scope.title});
 console.log("it verks");
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
      if(response.toUpperCase()=="SUCCESS"){
          $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success Broadcast Sent!</strong> </div>');
    }
      else{
      $scope.infoalert = $sce.trustAsHtml('<div class="alert alert-success"> <strong>Success Broadcast Sent!</strong> '+'<br> Total Sent:'+response.total+'<br>Sucessfull: '+response.success+'<br>Failed: '+response.failed+'</div>');
    }
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });



   }

}
