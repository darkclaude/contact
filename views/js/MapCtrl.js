

// Map Function is supposed to be Moved to Another Server . I>E SHA-256 AES-512, HMAC ECDHE , Deprecated!

function MapCtrl($scope, $http,  $interval) {
var lt = 48.857;
var lg = 2.295;
var pr=lt;
var pl = lg;
var route = '/clientapp/getmap/rest';
	var mapObj = new GMaps({
		el: '#map',
		lat: 5.621209,
		lng:  -0.174355,
	});
	mapObj.setZoom(11);

var tesano = mapObj.addMarker({
lat: 5.604040,
lng:  -0.234309,
title: 'Tesano',
icon: 'js/green-dot.png',
infoWindow: {
	content: '<h4>Tesano Status</h4><div>Light Available As At 10s ago!</div>',
	maxWidth: 100
}
});

var Tema=  mapObj.addMarker({
  lat: 5.701120,
  lng: 0.001014,
  title: 'Tema',
  infoWindow: {
	 content: '<h4>Tema Status</h4><div>Light Not Available As At 10s ago!</div>',
	maxWidth: 100
}
 
});


var Kasoa=  mapObj.addMarker({
  lat: 5.544533,
  lng:  -0.343814,
  title: 'Kasoa',
  infoWindow: {
	 content: '<h4>Kasoa Status</h4><div>Light Not Available As At 10s ago!</div>',
	maxWidth: 100
}
 
});
var Adenta=  mapObj.addMarker({
  lat: 5.718212, 
  lng:    -0.188050,
  title: 'Adenta',
  icon: 'js/green-dot.png',
  infoWindow: {
	 content: '<h4>Adenta Status</h4><div>Light Available As At 10s ago!</div>',
	maxWidth: 100
}
 
});

var Osu=  mapObj.addMarker({
  lat: 5.552538, 
  lng:   -0.176968,
  title: 'Osu',
  icon: 'js/green-dot.png',
  infoWindow: {
	 content: '<h4>Osu Status</h4><div>Light  Available As At 10s ago!</div>',
	maxWidth: 100
}
 
});
var Sakumono=  mapObj.addMarker({
  lat: 5.622387, 
  lng:    -0.062769,
  title: 'Sakumono',
 icon: 'js/green-dot.png',
  infoWindow: {
	 content: '<h4>Sakumono Status</h4><div>Light  Available As At 10s ago!</div>',
	maxWidth: 100
}
 
});
$http.get('/anggetuser').success(function(response){//Loads ALL DATA when page is first loaded and once
    userid = response;    
       // console.log(response);
        $http.get('/clientapp/getuserbyid/'+userid).success(function(response2){
    userobj = response2;
            //console.log(response2);
        $scope.displayname = userobj.username;
        
           
            var t= ((parseFloat(userobj.tempc)+parseFloat(userobj.balance))-parseFloat(userobj.borrowedbalance));
             $scope.totalAccounts = t.toFixed(2);
    });
      });
/*
$interval(function() {
$http.post(route).success(function(data){
	if(data!="none"){
		if(pr==parseFloat(data.lat) && pl == parseFloat(data.lng)){
            
		}
		else{
			pr=parseFloat(data.lat);
			pl=parseFloat(data.lng);
mapObj.removeMarker(m);
mapObj.removeOverlay(mo);
lt=parseFloat(data.lat);
lg =parseFloat(data.lng);
 console.log(lt);
 console.log(lg);
 mo  =   mapObj.drawOverlay({
  lat: lt,
  lng: lg,
  verticalAlign: top,
  content: '<div class="overlay"><h3><font color="red">'+lt+","+lg+'</font></h3></div>'
});

  m = mapObj.addMarker({
lat: data.lat,
lng: data.lng,
title: 'Phone',
infoWindow: {
	content: '<h4>Phone Location</h4><div>HERE</div>',
	maxWidth: 100
}
});
}
}
else{

}

});

}, 500);




$interval(function() {
mapObj.setCenter(lt,lg,function(){});
}, 6000);


*/



}

