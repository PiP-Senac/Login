<?php
include("./php/protect.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Bom dia <?php echo $_SESSION['Email'];  ?></h1> 
<a href="./php/logout.php">Sair</a>
</body>
</html>