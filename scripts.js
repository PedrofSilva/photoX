$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });
    
    //Animação da Navbar
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 50){
            $('.nav-menu').addClass('custom-navbar');
        }
        else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 680){
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        }else{
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });
});
