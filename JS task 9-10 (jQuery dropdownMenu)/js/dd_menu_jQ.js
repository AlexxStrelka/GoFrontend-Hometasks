
$.noConflict();
jQuery( document ).ready(function( $ ) {


$('#menu li').hover(function(){
            
            $(this).find('ul:first').stop(true, true).slideDown(600);
            
        }, function(){

            $(this).find('ul:first').delay(300).slideUp(600);
       });
        



});
