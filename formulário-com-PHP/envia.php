<?php

// if(isset($_POST['email']) && !empty($_POST['email'])){

    // VARIÁVEIS
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);


    $to = "intelioteste@gmail.com";
    $subject = "Formulário Inteliogia";
    
    $body = "Nome: " .$nome. "\n" .
            "Email: " .$email."\n" .
            "Telefone: " .$telefone;

    $header = "From:duvidas@inteliogia.com"."\n"."Replay-To:".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso");
    } else{
        echo("Houve um erro ao enviar o email");
    }

// }

?>