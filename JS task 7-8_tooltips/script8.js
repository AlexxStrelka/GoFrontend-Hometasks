
(function($, undefined){
$(function () {
	
function tooltip(target_items, className){  //для each ‘this’ указывает на конкретный элемент DOM, а не на объект jQuery
 
 	
 			$(target_items).each(function(i){ 
 				 	$($(".formField").get(i)).append("<div class='"+className+"' id='"+className+i+"'><p>"+$(this).attr('title')+"</p></div>");

				 	var my_tooltip = $("#"+className+i);
				 					 							 
					$(this).removeAttr("title").mouseover(function(){my_tooltip.css({opacity:0.8, display:"block"}).fadeIn(400);
					}).mouseout(function(){my_tooltip.fadeOut(400);});
			}); 
 	
}


$(document).ready(function(){
		tooltip(".formContainer input", "tooltip"); // Selector and classname in css
});

});
})(jQuery);
