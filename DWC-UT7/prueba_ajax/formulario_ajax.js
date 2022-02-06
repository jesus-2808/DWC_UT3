$(document).ready(function () {

  $("select[name='cursos']").on("change", () => {
    enviar();
  });

  function enviar() {

    $.ajax({
      type: "post",
      url: "ciclos_json.php",
      data: $("#formulario").serialize(),
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

  };
});