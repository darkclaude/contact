function PersonCtrl($scope, $sce,$http, $interval,$timeout, $window) {

   document.getElementById("unique").readOnly = true;

    $scope.email="none@none";
    $scope.jrr = "black";
    $scope.msgbt = "Signup";
   var  errormsg= "Empty Fields";
   $scope.signup = function(){
$scope.uniqueid="";
    var route = '/newaccount';
    $scope.dep = "";
       $scope.rd1 = "";
          $scope.rd2= "";
    var isEmpty = false;
    var semi = [$scope.name,$scope.address,$scope.email,$scope.provider,$scope.pnumber];
   // var errormsg = "";
    var em=false;
    var pn = false;
    var semilen = semi.length;
    for(var i=0; i<semilen; i++){
     // var s = semi[i];
   //  console.log(semi[i]);
      if((typeof semi[i] !== "undefined") && (semi[i] !== null)){
              if(i==4){

                if(semi[i].length!=9 || semi[i].charAt(0)=="0"){
                  alert("Invalid Phone Number!");
                  isEmpty=true;
                }
              }
              else{

             isEmpty = false;
           }
      }
      else{
        if(i==2){
          errormsg="Invalid Email!";
        }

      isEmpty= true;
      break;
      }

    }
if(isEmpty==true){

alert(errormsg);
}

else{
  $scope.createalert = $sce.trustAsHtml('<div class="alert alert-warning"><h3> <strong>Please Wait.....!<i class="fa fa-circle-o-notch fa-spin  fa-2x "></i></strong></div>');
//    $scope.jrr = "black";
$scope.msgbt = "Please Wait...";
document.getElementById("myBtn").disabled = true;
  var finalnum = $scope.pnumber;
  console.log(finalnum);
  var finals = finalnum.toString();
  console.log(finals);
  var pre = "233";
  var fin = pre.concat(finals);
  console.log(fin);
    var parameter = JSON.stringify({name:$scope.name, address: $scope.address, email: $scope.email, pnumber: fin, provider: $scope.provider});

    $http.post(route, parameter).
    success(function(response, status, headers, config) {
            if(response == 'already'){
              $scope.createalert = $sce.trustAsHtml('<div class="alert alert-danger"> <strong>Error!</strong> '+'Account(PhoneNumber) Already Exist!'+'</div>');
              swal({
         title: '<font color="green">Success!</font>',
         text:'<div class="alert alert-danger"> <strong>Error!</strong> '+'Account(PhoneNumber) Already Exist!'+'</div>',
         timer: 2000,
         html: true,
         type: "success",
         showConfirmButton: false
        });
               document.getElementById("e").readOnly = false;
              document.getElementById("n").readOnly = false;
               document.getElementById("t").readOnly = false;
               document.getElementById("ss").readOnly = false;
              //  document.getElementById("l").readOnly = false;
                   document.getElementById("idn").readOnly = false;
                   document.getElementById("myBtn").disabled = false;
                     $scope.msgbt = "Signup";
            }
            else{
          //    $scope.jrr="red";
          //    console.log($scope.jrr);
             document.getElementById("e").readOnly = true;
              document.getElementById("n").readOnly = true;
               document.getElementById("t").readOnly = true;
               document.getElementById("ss").readOnly = true;
              //  document.getElementById("l").readOnly = true;
                   document.getElementById("idn").readOnly = true;
                   document.getElementById("myBtn").disabled = false;
                     $scope.msgbt = "Signup";
                      $scope.createalert = $sce.trustAsHtml('<div class="alert alert-success"><h3> <strong>Success!</strong> '+'Account Created Succesfully, Protect Your Unique ID for Claiming Prizes and referencing, Thank you! <font color="red">Account Not Activated!</font> Please Wait for Activation SMS!. Activation Necessary to Enjoy the Freebies! :) '+'</h3></div>');
                      swal({
                 title: '<font color="green">Success!</font>',
                 text:'<div class="alert alert-success"><h3> <strong>Success!</strong> '+'Account Created Succesfully, Protect Your Unique ID for Claiming Prizes and referencing, Thank you! <font color="red">Account Not Activated!</font> Please Wait for Activation SMS!. Activation Necessary to Enjoy the Freebies! :) '+'</h3></div>',
                 timer: 2000,
                 html: true,
                 type: "success",
                 showConfirmButton: false
               });
            $scope.uniqueid = response;

        }
   // console.log(trig);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        document.getElementById("myBtn").disabled = false;
          $scope.msgbt = "Signup";
        // or server returns response with an error status.
      });
   // console.log(atype);
 }


   }
   $scope.clear = function() {
     document.getElementById("e").readOnly = false;
      document.getElementById("n").readOnly = false;
       document.getElementById("t").readOnly = false;
       document.getElementById("ss").readOnly = false;
      //  document.getElementById("l").readOnly = true;
           document.getElementById("idn").readOnly = false;
           $scope.uniqueid="";
           $scope.pnumber="";
           $scope.address="";
           $scope.name="";
           $scope.provider="";
           $scope.email="none@none";
        //   document.getElementById("myBtn").disabled = false;

   }


}
