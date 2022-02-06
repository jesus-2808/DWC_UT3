<?php
if ($_POST["valorOpcion"]=="1daw"){
    $json1=[["modulo1"=>"Bases de Datos", "modulo2"=>"Programacion en Java", "modulo3"=>"Lenguaje de Marcas", "modulo4"=>"Entornos de Desarrollo", "modulo5"=>"Sistemas Informaticos"]];
    echo json_encode($json1);
} 
else if ($_POST["valorOpcion"]=="2daw"){

    $json2=[["modulo1"=>"Desarrollo Web Entorno Servidor", "modulo2"=>"Desarrollo Web Entorno Cliente", "modulo3"=>"Diseño Interfaces Web", "modulo4"=>"Despliegue Aplicaciones Web"]];
    echo json_encode($json2);
}

           
           
      
            
   
       

?>

