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






