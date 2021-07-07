jQuery('document').ready(function ($){
    var BotonMenu = $('.icono-menu'),
        menu = $('.nav ul');

    BotonMenu.click(function (){


        if(menu.hasClass('mostrar')){
            menu.removeClass('mostrar');
        }
        else{
            menu.addClass('mostrar');
        }
    });
});

$(document).ready(function (){
    $('.Inicio').click(function (){
        $('body,html').animate({
            scrollTop: '0px'
        });
    })

    $('.QuéofreceAgronomist').click(function (){
        $('body,html').animate({
            scrollTop: '630px'
        });
    })
    $('.Precios').click(function (){
        $('body,html').animate({
            scrollTop: '2490px'
        });
    })

    $('.Contáctanos').click(function (){
        $('body,html').animate({
            scrollTop: '4000px'
        });
    })
})