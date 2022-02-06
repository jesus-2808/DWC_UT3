$(document).ready(function () {

 $("#cursos").change(function(){
   var seleccion=$(this).children("option:selected").val();
   var parametro={
     "valorOpcion":seleccion
   }

  $.ajax({
    data: parametro,
    type: "post",
    url: "modulos_json.php",
   
    success: function (response) {
      console.log(response)
      var objResp = JSON.parse(response);



      for ( let obj of objResp) {
        console.log(obj);
        var ulPrimero = $("<ul>", {
          "class": "modulos",
          "text" : "modulos a tu disposicion"
        });

        const mod1 = $("<li>", {
          "text": obj.modulo1
        });
        ulPrimero.append(mod1);


        var mod2 = $("<li>", {
          "text": obj.modulo2

        });
        ulPrimero.append(mod2);
        var mod3 = $("<li>", {
          "text": obj.modulo3

        });
        ulPrimero.append(mod3);
        var mod4 = $("<li>", {
          "text": obj.modulo4

        });
        ulPrimero.append(mod4);
      }
      $("body").append(ulPrimero);
    }
  });

 });

  
});

