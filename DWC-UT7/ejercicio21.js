$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").prepend("<b>Texto añadido</b>. ");
      var parrafito=document.createElement("p");
      var contenido=document.createTextNode("parrafada");
      parrafito.appendChild(contenido);
      $("p").append(parrafito);
    });
   
  });