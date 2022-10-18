/* Mostrar Senha */

let btn = document.querySelectorAll('#olho');
for(i = 0 ;i < btn.length;i++){
btn[i].addEventListener('click', function() {
  let input = document.querySelectorAll('.pip-inp_Senha');
  for(i = 0 ;i < input.length;i++){
  if(input[i].getAttribute('type') == 'password') {
        input[i].setAttribute('type', 'text');
    } else {
        input[i].setAttribute('type', 'password');
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


     // Input Senha 
var pasw = document.querySelector(".pip-inp_Senha");
var form = document.querySelector(".pip-form_container");
var test = document.querySelector(".test");

    
pasw.addEventListener('keyup',function(){
  if(pasw.length <= 8){
  
}

})

    $(document).ready(function(){
      $(pasw).focus(function() {
        $(this).parent().addClass("pip-div__Senha--focus")
      });
      $(pasw).blur(function() {
        $(this).parent().removeClass("pip-div__Senha--focus")
      });
    });

    function valid(element) {
      $(element)
        .closest('.pip-div__Senha')
        .removeClass('pip-div__Email--error')
    }
    
    function notValid(element) {
      $(element)
        .closest('.pip-div__Senha')
        .addClass('pip-div__Email--error');
    }


/* Email */  
        function valid(element) {
          $(element)
            .closest('.pip-div__Email')
            .removeClass('pip-div__Email--error')
        }
        
        function notValid(element) {
          $(element)
            .closest('.pip-div__Email')
            .addClass('pip-div__Email--error');
        }
        
        
        $('#inputEmail').on('focus change', function() {
          if (! $(this).val() || $(this).val().length === 0) {
            return notValid($(this));
          }
          
          valid($(this));
        });

        $(document).ready(function(){
          $("#inputEmail").focus(function() {
            $(this).parent().addClass("focoAtual")
          });
          $("#inputEmail").blur(function() {
            $(this).parent().removeClass("focoAtual")
          });
        });

     

 