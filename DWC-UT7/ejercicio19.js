$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").append("<b>Texto añadido</b>. ");
    });
    $("#btn2").click(function(){
      $("ol").append("<li>item añadido</li>");
    });
  });