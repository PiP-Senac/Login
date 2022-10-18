

// Email 
var divEmail = document.querySelectorAll(".pip-div__Email");
var inpEmail = document.querySelector("#inputEmail");
var inpCEmail = document.querySelector("#inputCEmail");


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
  const $result = $('.pip-div__Email');
  const email = $('#inputEmail').val();


  if (validateEmail(email)) { //email valido 
    $result.addClass("sucess");
    $result.removeClass("error");
  } else { //email invalido
    $result.addClass("error");
    $result.removeClass("sucess");
  }

  return false;
}
$('#inputEmail').on('input', validate);


//Confirmar Email == Email
function validarSenha() {
  if (inpEmail.value != inpCEmail.value) {
    inpCEmail.setCustomValidity("Emails Diferentes");
    inpCEmail.reportValidity();
    return false;
  } else {
    inpCEmail.setCustomValidity("");
    return true;
  }
}

inpCEmail.addEventListener('input', validarSenha);

// Border Effect
var inputE = document.querySelectorAll(".pip-inp_Email");

$(document).ready(function(){
  for(i = 0; i < inputE.length; i++){
$(inputE[i]).focus(function() {
  $(this).parent().addClass("pip-div__Email--focus");
});
}


for(i = 0; i < inputE.length; i++){
$(inputE[i]).blur(function() {
  $(this).parent().removeClass("pip-div__Email--focus");
});
}
});
  
/* Senha */

/* Mostrar Senha */
let inputS = document.querySelectorAll('.pip-inp_Senha');
let btn = document.querySelectorAll('#olho');
for(i = 0 ;i < btn.length;i++){
btn[i].addEventListener('click', function() {
  for(i = 0 ;i < inputS.length;i++){
  if(inputS[i].getAttribute('type') == 'password') {
        inputS[i].setAttribute('type', 'text');
    } else {
        inputS[i].setAttribute('type', 'password');
    }
  }
    });
}

$(document).ready(function(){
  for(i=0;i<btn.length;i++){
    $(btn[i]).click(function(){
      if($(btn).attr("src") == "img/olho.svg")
      $(btn).attr("src","img/olho-cruzados.svg");
      else
        $(btn).attr("src","img/olho.svg");
    });
  }
})

/* Validação Senha */
var form = document.querySelector(".pip-form_container");
var test = document.querySelector(".test");
var inpSenha = document.querySelector("#inputSenha");
var valSpan = document.querySelectorAll(".val-span");
var valIcon = document.querySelectorAll(".val-icons");

inpSenha.addEventListener('keyup',function(){

  var lowerCaseLetters = /[a-z]/g;
  if(inpSenha.value.match(lowerCaseLetters)) {
    valSpan[0].classList.remove("invalid");
    valSpan[0].classList.add("valid");
    valIcon[0].src = "img/check.svg";
  } else {
    valSpan[0].classList.add("invalid");
    valSpan[0].classList.remove("valid");
    valIcon[0].src = "img/error.svg";
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(inpSenha.value.match(upperCaseLetters)) {
    valSpan[1].classList.remove("invalid");
    valSpan[1].classList.add("valid");
    valIcon[1].src = "img/check.svg";
  } else {
    valSpan[1].classList.add("invalid");
    valSpan[1].classList.remove("valid");
    valIcon[1].src = "img/error.svg";

  }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(inpSenha.value.match(numbers)) {
      valSpan[2].classList.remove("invalid");
      valSpan[2].classList.add("valid");
      valIcon[2].src = "img/check.svg";
    } else {
      valSpan[2].classList.add("invalid");
      valSpan[2].classList.remove("valid");
      valIcon[2].src = "img/error.svg";
    }

  var specialCharacter = /(?=.*[!@#$%^&*])/;
  if(inpSenha.value.match(specialCharacter)) {
    valSpan[3].classList.remove("invalid");
    valSpan[3].classList.add("valid");
    valIcon[3].src = "img/check.svg";

  } else {
    valSpan[3].classList.add("invalid");
    valSpan[3].classList.remove("valid");
    valIcon[3].src = "img/error.svg";

  }

  
  if(inpSenha.value.length > 8){
    valSpan[4].classList.remove("invalid");
    valSpan[4].classList.add("valid");
    valIcon[4].src = "img/check.svg";
}else{
  valSpan[4].classList.add("invalid");
  valSpan[4].classList.remove("valid");
  valIcon[4].src = "img/error.svg";
}


for(i = 0; i < valSpan.length; i++){
if($(valSpan[i]).hasClass("valid")){
  console.log(valSpan)
  $(test).css("display","none");
} else {
  
}
}

});

// Border Effect 

    $(document).ready(function(){
        for(i = 0; i < inputS.length; i++){
      $(inputS[i]).focus(function() {
        $(this).parent().addClass("pip-div__Senha--focus");
        $(test).css("display","flex");
      });
    }


    for(i = 0; i < inputS.length; i++){
      $(inputS[i]).blur(function() {
        $(this).parent().removeClass("pip-div__Senha--focus");
      });
    }
  });
