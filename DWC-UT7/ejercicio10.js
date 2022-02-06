$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "red");
    });
    $("input").blur(function(){
      $(this).css("background-color", "blue");
    });
  });