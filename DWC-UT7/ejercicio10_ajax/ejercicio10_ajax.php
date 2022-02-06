<?php
// Aquí podemos procesar los datos. Vienen dentro de $_POST
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$edad = $_POST["edad"];
echo json_encode( "Nombre: $nombre, Correo: $correo, Edad: $edad\n", FILE_APPEND);

?>