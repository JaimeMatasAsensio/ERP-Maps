"use strict";
/*Documento para implementar la funcionalidad de eliminar productos mediante drag&drop para usuarios registrados*/
function allowDropProduct(event) {
  event.preventDefault();
}

function dragProduct(event){
  event.dataTransfer.setData("text",event.target.id);
}
function dropProduct(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  checkRemoveProductDragDrop(data);
  
}
