"use strict";
/*Documento para implementar la API Google Maps en el ERP*/
var usersPos;
userLocation();
function myMap() {
  if(usersPos){
    console.log(usersPos);
  }
  var mapStore = document.getElementById("StoreMap");
  if(mapStore){
    var centerStoreMap = new google.maps.LatLng(usersPos.longitud,usersPos.latitud);
    var mapOptions = {center: centerStoreMap, zoom: 9};
    var map = new google.maps.Map(mapStore, mapOptions);
    var markerUser = new google.maps.Marker({position:centerStoreMap,
                                        icon:"../imagenes/userMarker.png",
                                        animation: google.maps.Animation.BOUNCE});
    markerUser.setMap(map);
    var shopsCoords = Store.getShopCoords();
    shopsCoords.forEach(function(element) {
      var coordShop = new google.maps.LatLng(element.longitud, element.latitud);
      var shopMarker = new google.maps.Marker({position: coordShop,
                                              icon:"../imagenes/shopMarker.png"});
      shopMarker.setMap(map);
    });
  }    
}

function userLocation() {
  if(navigator.geolocation){
    var pos = navigator.geolocation.getCurrentPosition(getLocation);
  }else{
    "La geolocalizacion no esta soportada en este navegador"
  }
}

function getLocation(position){
  if(!(typeof position == "string")){
    usersPos = {longitud:  position.coords.latitude,
            latitud: position.coords.longitude}
  }else{
    return false;
  }
}
