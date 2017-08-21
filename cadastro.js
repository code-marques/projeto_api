var api = 'http://localhost/api';

$(document).ready(function () {

    logaUsuario();

    $('#login').submit(function (ev) {
        ev.preventDefault();

        alert('teste');

        $.post(api + '/login.php', $(this).serialize(), function (data) {
            if (data.token === false) {
                $('#msgErro').show();
            } else {
                window.localStorage.setItem('token', data.token);
                window.location = 'home.html';
            }
        });
        //window.location = 'index.html';
    });

        $('#cadastro').submit(function(ev) {
            ev.preventDefault();
            console.log($(this));

            var form = new FormData ($(this)[0]);

        // ajax para enviar imagem no formulário

        $.ajax({
            url: api + '/cadastro.php',
            type:'POST',
            data:form,
            contentType: false,
            processData: false
        });

        });

        validateSenha();
        validateTelefone();
});

    function validateSenha() { 
        $('#conf_senha').on('keyup', function() {
            var senha = $('#cad_senha'). val ();

            if (senha != $(this).val()) {
                $(this).parent().attr('class','from-group has-sucess');
                $('#cad_senha').parent().attr('class', 'from-group has-error');
            }else{
                $(this).parent().attr('class','form-group has sucess');
                $('#cad_senha').parent().attr('class','form-group has-sucess');
            }

        });
    }

function validateTelefone(){
    var regexp = /^[0-9]{2} 9?[0-9]{4}-[0-9]{4}$/i; // 11 95555-5555 | 11 5555-5555

    $('#telefone').on('keyup', function () {
        if (regexp.exec($(this).val())) {
            $(this).parent().attr('class', 'form-group has-success');
        } else {
            $(this).parent().attr('class', 'form-group has-error');
        }
    });
}
function logaUsuario() {
    if (window.localStorage.getItem ('token') !=null) {
        window.location = 'home.html';
    }
}