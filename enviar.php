<?php
/* if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $comentario = $_POST["comentario"];
    
    $destinatario = "pabloruiz1992@outlook.com.ar";
    $asunto = "Consulta de $nombre";
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Correo Electrónico: $correo\n\n";
    $mensaje .= "Consulta:\n$comentario";
    
    // Envía el correo
    mail($destinatario, $asunto, $mensaje);
    
    // Redirige a una página de confirmación
    header("Location: confirmacion.html");
} */

$name = $_POST['nombre'];
$email = $_POST['correo'];
$subject = $_POST['nombre'];
$message = $_POST['comentario'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "pabloagustinruiz92@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

header("Location: confirmacion.html");
?>
