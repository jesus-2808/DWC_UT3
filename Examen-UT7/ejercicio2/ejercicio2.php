<?php
// Aquí podemos procesar los datos. Vienen dentro de $_POST
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];

echo json_encode( "Nombre: $nombre, Apellidos: $apellidos\n");

?>