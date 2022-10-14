<?php
if(!isset($_SESSION)) {
    session_start();
}

if(!isset($_SESSION['Email'])) {
    die("Você não pode acessar esta página porque não está logado.<p><a href=\"Login.html\">Entrar</a></p>");
}

?>