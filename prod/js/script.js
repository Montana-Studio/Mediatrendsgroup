$(document).ready(function() {
    $('.btn-text').click(function(){
    	$('.btn-text').addClass('open-form');
    	$('.contactar-form').addClass('slideUp').removeClass('form-salida');
    	$('.contactar-mediatrendsGroup').addClass('FormVisible');
    });	
    $('.contactar-mediatrendsGroup .FormVisible').click(function(){
    	$('.btn-text .open-form').removeClass('open-form');
    	$('.contactar-form .slideUp').removeClass('slideUp').addClass('slideDown');
    	$('.contactar-mediatrendsGroup .FormVisible').removeClass('FormVisible').addClass('slideDown2');
    });
    $('.close-form').click(function(){
        $('.contactar-form').removeClass('slideUp').addClass('form-salida');
        $('.contactar-mediatrendsGroup').removeClass('FormVisible');
    });
}); 