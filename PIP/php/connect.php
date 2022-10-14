<?php
$server = "localhost";
$usuario = "root";
$senha = "";
$dbname = "login";

$mysqli = new mysqli($server, $usuario, $senha, $dbname);

if($mysqli->error){
  die("Banco de dados erro " . $mysqli->error);  
}
?>