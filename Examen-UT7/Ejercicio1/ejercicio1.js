$(document).ready(function () {
    $.ajax({
        url: 'viajes.php',
        type: "post",

        success: function (response) {
            var objResp = JSON.parse(response);
            console.log(objResp);


            $("#contenido").attr("id", "todos_los_viajes");
            $("#todos_los_viajes").attr("value", "contenido");


            var h1 = document.createElement("h1")
            var texto = document.createTextNode("Viajes_Guia_Incluido");
            h1.appendChild(texto);



            $("#todos_los_viajes").append(h1);


            for (let obj of objResp) {
                var clasePais = $("<li>", {
                    "class": obj.clase_pais
                });

                const ciudad = $("<h2>", {
                    "text": obj.ciudad_h2
                });
                clasePais.append(ciudad);


                var span1 = $("<span>", {
                    "class": "detalle",
                    "text": obj.detalle_precio,

                });
                clasePais.append(span1);
                var span2 = $("<span>", {
                    "class": "precio por noche",
                    "text": obj.detalle_precio,
                    "text": obj.detalle_num_noches,
                });
                clasePais.append(span2);

                var ul1 = $("<ul>", {

                    "id": "ul",
                });
                clasePais.append(ul1);

                var liFotos = document.createElement("li");
                ul1.append(liFotos);

                var imagen = $("<img>");
                imagen.attr("src", obj.ruta_imagen);



                ul1.append(imagen);
                /*liFotos.append(imagen);*/
                var span2 = $("<span>", {

                    "text": obj.pie_imagen,
                    "id": "pie"
                });
                var br = $("<br>");
                imagen.append(br);
                ul1.append(span2)





                $("#todos_los_viajes").append(clasePais);
                /*accederemos mediante los hijos del ul que contiene la imagen y el pie de foto, la segunda coincidencia de la etiqueta
                span es la que debe recibir el evento */

                $(imagen).click(function () {
                    $("#pie").slideUp("slow");


                });

                $(imagen).click(function () {
                    $("#pie").slideDown("slow");


                });


                $(ul1).children().hover(function () {
                    $("span:eq(1)").toggleClass("destacado");
                }, function () {
                    $("span:eq(1)").removeClass("destacado");
                });

                $("li").mouseup(function(){
                    $("span:eq(0)").after("Descuento del 10%");
                  });


            }


        }



    });
});