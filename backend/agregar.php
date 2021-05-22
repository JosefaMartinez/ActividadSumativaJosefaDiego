<?php
//Leer en php
header('Content-type:application/json');
header('Access-Control-Allow-Origin:*');

    $archivojson= file_get_contents('./notas.json');
    //de tipo json se va a decodificar para convertilo en un arreglo
    $datosJson=json_decode($archivojson);

    //recibir datos desde angular hacia php
    $json=file_get_contents('php://input');
    //De json a array 
    $formulario=json_decode($json);

    //Agregar al arreglo obtenido del archivo notas.json

    array_push($datosJson,$formulario[0]);

    //Convertir de array a json
    $archivojson2 = json_encode($datosJson);
   
    //Abrir archivo para agregar el nuevo elemento que sea tipo json
    $archivo = fopen("notas.json","w");
    fwrite($archivo,$archivojson2);

    $variable="ok";
    echo json_decode($variable);
?>