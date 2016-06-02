$(function() {
    
    
	$link = $("li.menu-item.mainTag");//Menu Country
	$dropLink = $("ul.dropdown"); 
   	$dropSublink = $("li.dropdown__submenu.tag > a");//Menu Europe, Middle East, Asia.......
   	$dropSublinkItems = $("ul.dropdown__submenu__block");//Menu items France, Thailand etc........
    
    console.log("$dropSublink", $dropSublink);
    console.log("$dropSublinkItems countries", $dropSublinkItems);

  $link.mouseover(function(e){
            $dropLink.slideDown(600);
            showSublink();
  	         }).stop(true, true).mouseleave(function(e){
    	   $dropLink.slideUp(800);
  });

function showSublink() {
          $dropSublink.each(function(i){
          $($dropSublink[i]).mouseover(function(e){
          $($dropSublinkItems[i]).show(400).delay(200).slideDown(600);
            }); 
          });
}
   
    
    // $dropSublinkItems.mouseover(function(e){
    //         $(this).slideDown(600);
    //          }).delay(200).mouseleave(function(e){
    //        $(this).slideUp(800);
    // });

});

