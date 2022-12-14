<?php
include("./php/protect.php");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Fav Icon  -->
    <!-- fav icon 
    <link rel="apple-touch-icon" sizes="57x57" href="">
    <link rel="apple-touch-icon" sizes="60x60" href="">
    <link rel="apple-touch-icon" sizes="72x72" href="">
    <link rel="apple-touch-icon" sizes="76x76" href="">             
    <link rel="apple-touch-icon" sizes="114x114" href="">
    <link rel="apple-touch-icon" sizes="120x120" href="">
    <link rel="apple-touch-icon" sizes="144x144" href="">
    <link rel="apple-touch-icon" sizes="152x152" href="">
    <link rel="apple-touch-icon" sizes="180x180" href="">
    <link rel="icon" type="image/png" sizes="192x192"  href="">
    <link rel="icon" type="image/png" sizes="32x32" href="">
    <link rel="icon" type="image/png" sizes="96x96" href="">
    <link rel="icon" type="image/png" sizes="16x16" href=""> -->
    <!-- link style -->
    <link rel="stylesheet" href="./sass/Registro/Registro.css">
    <title>Registro | PIP</title>
</head>
<body>
    <div class="pip-registro_container">
        <form
          action=""
          name="formLogin"
          method="post"
          class="pip-form_container"
        >
          <!--|||------------Usuario------------|||-->
          <div class="pip-div_User pip-div_login">
            <label for="inputUser" class="pip-label_User pip-label_login ">
              <div class="pip-div__User pip-div__login size_max size_min" id="div_User">
                <span class="pip-span_User pip-span_login"
                  ><label for="inputNick"><img
                    src="./img/user.svg"
                    alt="Email"
                    class="pip-img_Email icons"
                  /></label
                ></span>
                <input
                  type="text"
                  placeholder="User"
                  id="inputUser"
                  name="User"
                  class="pip-inp_User pip-inp_login"
                  required
                  aria-required="true"
                  autocomplete="off"
                />
                <span class="pip-span__User pip-span__login">Nome de Us??ario</span>
                <!--<span class="divSpanEmail__check"
                ><i id="iconcheck" class="uil"></i
              ></span>
              <i class="uil uil-eye-slash" uil-exclamation-triangle uil-check></i> -->
              </div>
            </label>
          </div>
          <!--|||------------Email------------|||-->
          <div class="pip-div_Email pip-div_login ">
            <label for="inputEmail" class="pip-label_Email pip-label_login">
              <div class="pip-div__Email pip-div__login size_max size_min" id="div_Email">
                <span class="pip-span_Email pip-span_login"
                  ><label for="inputEmail"><img
                    src="./img/email.svg"
                    alt="Email"
                    class="pip-img_Email icons"
                  /></label
                ></span>
                <input
                  type="email"
                  placeholder="Email"
                  id="inputEmail"
                  name="Email"
                  class="pip-inp_Email pip-inp_login inp_Email"
                  required
                  aria-required="true"
                  autocomplete="off"
                />
                <span class="pip-span__Email pip-span__login">Email</span>
                <!--<span class="divSpanEmail__check"
                ><i id="iconcheck" class="uil"></i
              ></span>
              <i class="uil uil-eye-slash" uil-exclamation-triangle uil-check></i> -->
              </div>
            </label>
          </div>
          
          <!--|||------------Confirmar Email------------|||-->
          <div class="pip-div_CEmail pip-div_login">
            <label for="inputCEmail" class="pip-label_CEmail pip-label_login">
              <div class="pip-div__CEmail pip-div__login size_max size_min" id="div_CEmail">
                <span class="pip-span_CEmail pip-span_login"
                  ><label for="inputCCEmail"><img
                    src="./img/email.svg"
                    alt="Email"
                    class="pip-img_Email icons"
                  /></label
                ></span>
                <input
                  type="email"
                  placeholder="Email"
                  id="inputCEmail"
                  name="Confirmar Email"
                  class="pip-inp_CEmail pip-inp_login inp_Email"
                  required
                  aria-required="true"
                  autocomplete="off"
                />
                <span class="pip-span__CEmail pip-span__login">Confirmar Email</span>
                <!--<span class="divSpanEmail__check"
                ><i id="iconcheck" class="uil"></i
              ></span>
              <i class="uil uil-eye-slash" uil-exclamation-triangle uil-check></i> -->
              </div>
            </label>
          </div>
          
          <!--|||------------Senha------------|||--> 
          <div class="pip-div_Senha pip-div_login">
            <label for="inputSenha" class="pip-label_Senha pip-label_login">
              <div class="pip-div__Senha pip-div__login size_max size_min">
                <span class="pip-span_Senha pip-span_login"
                  ><label for="inputSenha"
                    ><img
                    src="./img/senha.svg"
                    alt="Senha"
                    class="pip-img_Email icons"
                  /></label
                ></span>
                <input
                  type="password"
                  placeholder="Senha"
                  class="pip-inp_Senha pip-inp_login inp_Senha"
                  name="Senha"
                  minlength="8"
                  required
                  aria-required="true"
                  id="inputSenha"
                />
                <span class="pip-span__Senha pip-span__login">Senha</span>
                <span class="pip-span_eyeSenha">
                  <img
                    src="./img/olho.svg"
                    class="pip-img_eyeSenha"
                    id="olho"
                    alt="Senha"
                /></span>
              </div>
            </label>
          </div>

          <!--|||------------Confirmar Senha------------|||-->
          <div class="pip-div_CSenha pip-div_login">
            <label for="inputCSenha" class="pip-label_CSenha pip-label_login ">
              <div class="pip-div__CSenha pip-div__login size_max size_min">
                <span class="pip-span_CSenha pip-span_login"
                  ><label for="inputCSenha"
                    ><img
                    src="./img/senha.svg"
                    alt="Senha"
                    class="pip-img_Email icons"
                  /></label
                ></span>
                <input
                  type="password"
                  placeholder="Confirmar Senha"
                  class="pip-inp_CSenha pip-inp_login inp_Senha"
                  name="CSenha"
                  minlength="8"
                  required
                  aria-required="true"
                  id="inputCSenha"
                />
                <span class="pip-span__CSenha pip-span__login"> Confirmar Senha </span>
                <span class="pip-span_eyeSenha ">
                  <img
                    src="img/olho.svg"
                    class="pip-img_eyeSenha"
                    id="olho"
                    alt="CSenha"
                /></span>
              </div>
            </label>
          </div>
  
          <!--|||------------Senha Valida????o ------------|||-->
          <div class="test">
            <span class="val-span val-lw"><img src="./img/error.svg" class="val-icons" alt="verifica????o">Letras Minusculas </span>
            <span class="val-span val-up"><img src="./img/error.svg" class="val-icons" alt="verifica????o">Letras Maiusculas </span>
            <span class="val-span val-number"><img src="./img/error.svg" class="val-icons" alt="verifica????o">Numeros </span>
            <span class="val-span val-spc"><img src="./img/error.svg" class="val-icons" alt="verifica????o">Pelo Menos um caractere especial</span>
            <span class="val-span val-len"><img src="./img/error.svg" class="val-icons" alt="verifica????o">Senha Maior</span>
          </div>
          <!--|||------------Data de Nascimento ------------|||-->
            <div class="pip-div_Date">
                <label for="InpDate" class="pip-label_Date">
                    <input type="date" name="Date" class="pip-inp_Date" placeholder="data" id="InpDate">
                </label>
            </div>

          <!--|||------------CheckBox ------------|||-->
          <div class="pip-div_Checkbox">
            <label class="pip-label_Checkbox">
              <input type="checkbox" name="checkbox" class="pip-inp_Checkbox" />
              <span class="pip-span_Checkbox">Termos de Condi????o</span>
            </label>
          </div>
  
          <!--|||------------Button------------|||-->
          <div class="pip-div_Btnlogin">
            <button type="submit" class="pip-btn_Btnlogin">Criar Conta</button>
          </div>
  
          <!--|||----------Ja tenho Uma Conta----------|||-->
          <div class="pip-div_NConta">
            <label for="linkRegistro" class="pip-label_NConta">
              <a name="linkRegistro" class="pip-a_NConta" href="Login.html"
                ><span class="pip-span_NConta">J?? Tenho Uma Conta</span>
              </a>
            </label>
          </div>
        </form>
      </div>
      <!--|||---------- Footer ----------|||-->
      <footer class="pip-footer size_max">
        <div class="pip-footer_div">
          <a href="#" class="pip-footer_a"><span class="pip-footer_span">Quem Somos</span></a>
          <a href="#" class="pip-footer_a"><span class="pip-footer_span">Contato</span></a>
          <a href="#" class="pip-footer_a"><span class="pip-footer_span">Suporte</span></a>
        </div>
      </footer>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="./js/Registro.js"></script> 
    
   
</body>
</html>