$(document).ready(function () {
    const $nombre = $("#nombre"),
        $apellidos = $("#apellidos"),
        $respuesta = $("#respuesta");

    $("button").click(function () {
        // Poner estado de "cargando"
        $respuesta.html("Cargando...");
        $.post("ejercicio2.php", {
            nombre: $nombre.val(),
            apellidos: $apellidos.val(),

        }, function (respuestaComoJson) {
            // La decodificamos
            let respuesta = JSON.parse(respuestaComoJson);
            $respuesta.html(respuesta);
        })
    });

});