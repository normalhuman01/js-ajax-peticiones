<?php

// Devolve as boas vindas ao utilizador com nome e apelido
if ((isset($_GET['n'])) and (isset($_GET['s']))) {
    $nome = $_GET['n'];
    $sobrenome = $_GET['s'];

    $frase_final = "Welcome to the server, Sr(a). $nome $sobrenome.";
    
    echo $frase_final;
}

?>