
(function($, undefined){
$(function () {
	
	var i = 0;
	var $tabsHeaders = $(".tabsList");
	var $tabsContent = $(".tabsText");
	console.log($tabsHeaders, $tabsContent);
	
var activateTab = function (i) { //Function that activates Tabs and change teh styles accordingly...........
			$tabsContent.hide();
			$tabsContent.eq(i).show("slow");
			$tabsHeaders.removeClass("active");
			$tabsHeaders.eq(i).addClass("active");
			console.log($tabsHeaders.eq(i));
}
activateTab(0);

$tabsHeaders.each(function(index, element){ //Collects indexes of all the tab elements ..........
	    $(element).attr("tabNumber", i);
	    i++;                        
});
            
$tabsHeaders.click(function(){
    	activateTab(parseInt($(this).attr("tabNumber"))); //Transfers Tab index to the TabActivation function...
});				

$tabsHeaders.hover(   //Makes tabs change when hover................
      function () {
        if ($(this).hasClass("active")) {
        	$(this).removeClass("hover");
        } else {
        	$(this).addClass("hover")
        };
        console.log($(this));
      },
      function () {
        $(this).removeClass("hover");
      }
);

});
})(jQuery);
