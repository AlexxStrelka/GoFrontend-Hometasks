$(function(){

//danger_cat appears!

var $danger = $('#danger_cat');
var $door = $('#door');
var $scare = $('#scared_cat');
$('#door').click(function(e){
		$door.fadeOut(800, function(){
				$danger.fadeIn(400, catRun());
				
		});
});



});






;
//scared cat runs away..

var catRun = function() {
var $scare = $('#scared_cat');
$scare.stop(600).animate({left:'+=400'});

}

