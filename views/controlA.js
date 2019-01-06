function ACtrl($scope, $sce,$http, $interval,$timeout, $window) {

 
 
   var  errormsg= "Empty Fields";
   $scope.activate = function(){

  
    var parameter = JSON.stringify({pnumber:$scope.pnumber, code: $scope.code, resend: $scope.resend});
   var route = "/activatew";
    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response == 'none'){
            //  $scope.createalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+'Account(PhoneNumber) Already Exist!'+'</div>');
              swal({
         title: '<font color="red">Error!</font>',
         text:'<div class="alert alert-danger"> <strong>Error!</strong> '+'Account(PhoneNumber) does not exist!'+'</div>',
         timer: 2000,
         html: true,
         type: "success",
         showConfirmButton: false
        });
         
            }
             if(response=='resend'){
         //alert alert-success"><h3> <strong>Success!</strong> '+'Account Created Succesfully, Protect Your Unique ID for Claiming Prizes and referencing, Thank you! <font color="red">Account Not Activated!</font> Please Wait for Activation SMS!. Activation Necessary to Enjoy the Freebies! :) '+'</h3></div>');
                      swal({
                 title: '<font color="green">Success!</font>',
                 text:'<div class="alert alert-success"><h3> <strong>Success!</strong> '+'Activation Code Resent, Thank you! '+'</h3></div>',
                 timer: 2000,
                 html: true,
                 type: "success",
                 showConfirmButton: false
               });
           
        }
            if(response=='done'){
         //alert alert-success"><h3> <strong>Success!</strong> '+'Account Created Succesfully, Protect Your Unique ID for Claiming Prizes and referencing, Thank you! <font color="red">Account Not Activated!</font> Please Wait for Activation SMS!. Activation Necessary to Enjoy the Freebies! :) '+'</h3></div>');
                      swal({
                 title: '<font color="green">Success!</font>',
                 text:'<div class="alert alert-success"><h3> <strong>Success!</strong> '+'Your Account Has been Activated! '+'</h3></div>',
                 timer: 2000,
                 html: true,
                 type: "success",
                 showConfirmButton: false
               });
                      $window.location.href = "/auth/login";
           
        }
            if(response=='incorrect'){
         //alert alert-success"><h3> <strong>Success!</strong> '+'Account Created Succesfully, Protect Your Unique ID for Claiming Prizes and referencing, Thank you! <font color="red">Account Not Activated!</font> Please Wait for Activation SMS!. Activation Necessary to Enjoy the Freebies! :) '+'</h3></div>');
                            swal({
         title: '<font color="red">Error!</font>',
         text:'<div class="alert alert-danger"> <strong>Error!</strong> '+'Activation code is Incorrect!'+'</div>',
         timer: 2000,
         html: true,
         type: "success",
         showConfirmButton: false
        });
           
        }
   // console.log(trig);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
               swal({
         title: '<font color="red">Error!</font>',
         text:'<div class="alert alert-danger"> <strong>Error!</strong> '+'Unknown Error!'+'</div>',
         timer: 2000,
         html: true,
         type: "success",
         showConfirmButton: false
        });
      });
   // console.log(atype);
 }


   }
  



