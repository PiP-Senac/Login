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
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    //Email Valido 
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {


        }
    else{
    alert("E-mail invalido");
    }
   
}
 

 let colorG = document.querySelector('#inputEmail');

 colorG.addEventListener('blur', function(){
    let lblEmail = document.querySelector('divSpanLabel__div');
    lblEmail.classList.toggle ="sucess";
 
 });

 var pressed = document.getElementById('inputEmail');

 function keyPressed(evt){
     evt = evt || window.event;
     var key = evt.keyCode || evt.which;
     return String.fromCharCode(key); 

    }
    document.onkeypress = function(evt) {
        var str = keyPressed(evt);
        
        if((str == "@")||
          (str == ".")){
            document.getElementById('iconcheck').classList.toggle = 'uil-check';
          }else{
            document.getElementById('iconcheck').classList.toggle = 'uil-exclamation-triangle';


          }
        };
          
        
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

     

 