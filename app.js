$(document).ready(function () {

    window.location.hash = '#fotos';

    menuToggleInit();

    $(window).on('hashchange', function () {
        switch(window.location.hash) {
            case '#fotos':
                paginaFotos();
                break;
            case '#perfil':
                paginaPerfil();
                break;
            case '#favoritos':
                paginaFavoritos();
                break; 
        }
    });

});

function menuToggleInit() {
    $('#menu > li').click(function (el) {
        $('#menu > li').each(function () {
            $(this).attr('class', '');
        });

        $(this).attr('class', 'active');
    });
}

function paginaFotos() {
    alert('Fotos!!');
}

function paginaPerfil() {

}

function paginaFavoritos() {

}