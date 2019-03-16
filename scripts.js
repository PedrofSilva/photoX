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

    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value === 'all'){
            $('.filter').show(1000);
        } else {
            $('.filter').not('.' + value).hide(1000);
            $('.filter').filter('.' + value).show(1000);
        }
    });
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });
    /*
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 4000){
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });*/
});
 $('.navbar-nav').on('click', 'a', function(){
     $('.navbar-nav a.nav-active').removeClass('nav-active');
     $(this).addClass('nav-active');
 });

/* Animação Scroll */
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
var $target = $('.animacao, .galeria-anim , .moveFromLeft , .moveFromRight , .moveFromBottom'),   
    animationClass = 'animacao-start';

function animeScroll() {
    var documentTop = $(document).scrollTop(),
    offset = $(window).height() * 4.8/5;
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
        
    });
}
animeScroll();

$(document).scroll(debounce(function(){
    animeScroll();
}, 20));
}());


/*
var $target = $('.mission'),   
    colorClass = 'nav-active';

function navActive() {
    var documentTop = $(document).scrollTop(),
    offset = $(window).height() * 4.8/5;
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $('.nav-1').addClass(colorClass);
        } else {
            $('.nav-1').removeClass(colorClass);
        }
    });
}
navActive();

$(document).scroll(function(){
    navActive();
});
*/

           
    function addClass(el) {
        menu.removeClass('nav-active');
        $(el).addClass('nav-active');
    };

    var menu = $('.nav-item a');
    var sectionPositions = $('section').map(function(){
        return $(this).position().top;
    });
    var sections = $('section');
    $(document).on('scroll', function () {
        var scroll = $(document).scrollTop();

        var currentElement;
        $(sectionPositions).each(function (i) {
            if (scroll > this - 50) currentElement = menu[i];
        });
        currentElement && addClass(currentElement);
    });
    menu.on('click', function () {
        addClass(this);
    });
    addClass();