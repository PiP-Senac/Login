/* Mostrar Senha */
let btn = document.querySelector('#olho');

btn.addEventListener('click', function() {
    let input = document.querySelector('#inputSenha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

});

$(document).ready(function(){

    $("#olho").click(function(){
      if($(this).attr("src") == "img/olhos-cruzados.svg")
      $(this).attr("src","img/olho.svg");
      else
        $(this).attr("src","img/olhos-cruzados.svg");
  
    });
  });

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
            .closest('.divSpanLabel__div')
            .removeClass('error')
            .addClass('success');
        }
        
        function notValid(element) {
          $(element)
            .closest('.divSpanLabel__div')
            .removeClass('success')
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

     

 