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
      $(btn).attr("src","img/olhos-cruzados.svg");
      else
        $(btn).attr("src","img/olho.svg");
    });
  }
})


     // Input Senha 
    $('#inputSenha').on('focus change', function() {
      if (! $(this).val() || $(this).val().length === 0) {
        return notValid($(this));
      }
      
      valid($(this));
    });

    $(document).ready(function(){
      $("#inputSenha").focus(function() {
        $(this).parent().addClass("focoAtual")
      });
      $("#inputSenha").blur(function() {
        $(this).parent().removeClass("focoAtual")
      });
    });


/* Email */  
        function valid(element) {
          $(element)
            .closest('.pip-div__Email')
            .removeClass('error')
            .addClass('sucess');
        }
        
        function notValid(element) {
          $(element)
            .closest('.pip-div__Email')
            .removeClass('sucess')
            .addClass('error');
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

     

 