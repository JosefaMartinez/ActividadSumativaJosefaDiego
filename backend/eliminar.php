<?php
header('Content-type:application/json');
//Que permita leerlo desde cualquier parte y bien
header('Access-Control-Allow-Origin:*');

    $archivojson= file_get_contents('./notas.json');
    
    //de tipo json se va a decodificar para convertilo en un arreglo
    $datosJson=json_decode($archivojson);


    //recibir datos desde angular hacia php
    $json=file_get_contents('php://input');
    //echo $json;
    //De json a array 
    $nota=json_decode($json);
    var_dump($nota);


    $archivojson= file_get_contents('./notas.json');
    //de tipo json se va a decodificar para convertilo en un arreglo
    $datosJson=json_decode($archivojson);

    $indice = array_search($nota[0],$datosJson);
  
    $variable="ok";
    echo json_decode($variable);

?>