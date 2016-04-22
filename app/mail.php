<?php
// Varios destinatarios
$para  = 'marlene@mediatrends.cl';

// titulo
$titulo = 'Contacto Media Trends Group';

// mensaje
$message.='<!doctype html>';
$message.='<html>';
$message.='<head>';
$message.='<meta charset="UTF-8">';
$message.='<title>Power Influencer Newsletter</title>';
$message.='<meta http-equiv="X-UA-Compatible" content="IE=edge">';
$message.='</head>';
$message.='<body>';
$message.='<h3>Datos Recibidos</h3>';
$message.='<h2>Nombre : '.$_POST['nombre'].'</h2>';
$message.='<h2>'.$_POST['correo'].'</h2>';
$message.='<h2>'.$_POST['mensaje'].'</h2>';
$message.='</body>';
$message.='</html>';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= "Content-type: text/html; charset=UTF-8\r\n";

// Cabeceras adicionales
$cabeceras .= "From: no-reply@mediatrendsgroup.com\r\n";
$cabeceras .= "Return-Path: no-reply@mediatrendsgroup.com\r\n";


// Enviarlo
if (mail($para, $titulo, $message, $cabeceras,'-fno-reply@mediatrendsgroup.com')){
	echo 'exito';
}
?>