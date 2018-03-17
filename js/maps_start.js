"use strict";
/*Documento para implementar la API Google Maps en el ERP*/
var usersPos;
userLocation();
/*
if(usersPos){
  console.log(usersPos);
}
*/
function myMap() {
  var mapStore = document.getElementById("StoreMap");
  if(mapStore){
    var centerStoreMap = new google.maps.LatLng(usersPos.longitud,usersPos.latitud);
    var mapOptions = {center: centerStoreMap, zoom: 9};
    var map = new google.maps.Map(mapStore, mapOptions);
    var markerUser = new google.maps.Marker({position:centerStoreMap,
                                        icon:"../imagenes/userMarker.png",
                                        animation: google.maps.Animation.BOUNCE});
    markerUser.setMap(map);
    var ite = Store.shopIte;
    var item = ite.next();
    while(!item.done){
      var element = item.value.coords;
      var coordShop = new google.maps.LatLng(element.longitud, element.latitud);
      var shopMarker = new google.maps.Marker({position: coordShop,
                                              icon:"../imagenes/shopMarker.png"});
      shopMarker.setMap(map);
      var infoShop = new google.maps.InfoWindow({
        content: item.value.nombre
      })
      infoShop.open(map,shopMarker);
      
      item = ite.next();
    }
    
  }

  var mapShop1 = document.getElementById("134568");
  if(mapShop1){
    var shop1 = Store.getShopByCif("134568");
    var element = shop1.coords;

    var centerMap = new google.maps.LatLng(element.longitud, element.latitud);
    var zoom = (mapShop1.className == "maps mapShop_medium")? 9: 8;
    
    var mapOptions = {center: centerMap, zoom: zoom};
    var map = new google.maps.Map(mapShop1, mapOptions);
    var shopMarker1 = new google.maps.Marker({position:centerMap,
                                            icon:"../imagenes/shopMarker.png"
                                            });
    shopMarker1.setMap(map);

    var coordUser = new google.maps.LatLng(usersPos.longitud,usersPos.latitud);
    var userMarker = new google.maps.Marker({position: coordUser,
                                            icon:"../imagenes/userMarker.png",
                                            animation: google.maps.Animation.BOUNCE});
    userMarker.setMap(map);

    google.maps.event.addListener(shopMarker1,"click",function(){
      var infoShop = new google.maps.InfoWindow({
        content: shop1.nombre + "<br>Tel: " + shop1.telefono + "<br>" + shop1.direccion
      })
      infoShop.open(map,shopMarker1);
    })
  
  }

  var mapShop2 = document.getElementById("134569");
  if(mapShop2){
    var shop2 = Store.getShopByCif("134569");
    var element = shop2.coords;

    var centerMap = new google.maps.LatLng(element.longitud, element.latitud);
    var zoom = (mapShop2.className == "maps mapShop_medium")? 10: 8;
    var mapOptions = {center: centerMap, zoom: zoom};
    var map = new google.maps.Map(mapShop2, mapOptions);
    var shopMarker2 = new google.maps.Marker({position:centerMap,
                                            icon:"../imagenes/shopMarker.png"
                                            });
    shopMarker2.setMap(map);

    var coordUser = new google.maps.LatLng(usersPos.longitud,usersPos.latitud);
    var userMarker = new google.maps.Marker({position: coordUser,
                                            icon:"../imagenes/userMarker.png",
                                            animation: google.maps.Animation.BOUNCE});
    userMarker.setMap(map);

    google.maps.event.addListener(shopMarker2,"click",function(){
      var infoShop = new google.maps.InfoWindow({
        content: shop2.nombre + "<br>Tel: " + shop2.telefono + "<br>" + shop2.direccion
      })
      infoShop.open(map,shopMarker2);
    })
  
  }

  var mapShop3 = document.getElementById("789469");
  if(mapShop3){
    var shop3 = Store.getShopByCif("789469");
    var element = shop3.coords;

    var centerMap = new google.maps.LatLng(element.longitud, element.latitud);
    var zoom = (mapShop3.className == "maps mapShop_medium")? 10: 8;
    
    var mapOptions = {center: centerMap, zoom: zoom};
    var map = new google.maps.Map(mapShop3, mapOptions);
    var shopMarker3 = new google.maps.Marker({position:centerMap,
                                            icon:"../imagenes/shopMarker.png"
                                            });
    shopMarker3.setMap(map);

    var coordUser = new google.maps.LatLng(usersPos.longitud,usersPos.latitud);
    var userMarker = new google.maps.Marker({position: coordUser,
                                            icon:"../imagenes/userMarker.png",
                                            animation: google.maps.Animation.BOUNCE});
    userMarker.setMap(map);

    google.maps.event.addListener(shopMarker3,"click",function(){
      var infoShop = new google.maps.InfoWindow({
        content: shop3.nombre + "<br>Tel: " + shop3.telefono + "<br>" + shop3.direccion
      })
      infoShop.open(map,shopMarker3);
    })
  
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
