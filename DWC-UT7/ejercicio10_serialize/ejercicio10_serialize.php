<?php
// Aquí podemos procesar los datos. Vienen dentro de $_POST
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$direccion = $_POST["direccion"];
echo json_encode( "Nombre: $nombre, Correo: $apellidos, Edad: $direccion\n", FILE_APPEND);

?>