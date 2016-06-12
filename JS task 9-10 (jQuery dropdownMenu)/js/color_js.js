jQuery(document).ready(function(){

jQuery("ul.colorSub li").mouseenter(function(){
	console.log("will change colors", this);
			jQuery(this).animate({
      backgroundColor:"#ffb264",
    	}, 400);
		
});
 

jQuery("ul.colorSub li").mouseleave(function() {
console.log("will not!!");
    jQuery(this).animate({
    backgroundColor:"#ff6464",
    }, 400 );

});

});
