$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").prepend("<b>Texto añadido</b>. ");
    });
    $("#btn2").click(function(){
      $("ol").prepend("<li>item añadido</li>");
    });
  });