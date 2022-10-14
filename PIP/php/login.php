<?php 
include("connect.php");


if(isset($_POST['Email']) || isset($_POST['Senha'])) {

    if(strlen($_POST['Email']) == 0) {
        echo "Preencha seu e-mail";
    } else if(strlen($_POST['Senha']) == 0) {
        echo "Preencha sua senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['Email']);
        $senha = $mysqli->real_escape_string($_POST['Senha']);

        $sql_code = "SELECT * FROM loginreceiver WHERE email = '$email' AND senha = '$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {
            
            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['Email'] = $usuario['Email'];
            $_SESSION['Senha'] = $usuario['Senha'];

            header("Location: ../home.php");

        } else {
            echo "Falha ao logar! E-mail ou senha incorretos";
        }

    }

}

?>