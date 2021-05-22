<?php
header('Content-type:application/json');

//Que permita leerlo desde cualquier parte y bien
header('Access-Control-Allow-Origin:*');
    //Obtener el contenido del arcihvo notas.json
    $json=file_get_contents('./notas.json');
    //Convertir de tipo json a un arreglo para que se pueda leer
    $notas=json_decode($json);

    echo $json;
    
?>


