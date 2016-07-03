$(function() {

 $(".header_wrapper_container_slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("header_wrapper_container_slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); 
 var bl = $(sl).find("li.header_wrapper_container_slider"+obj); 
 var step = $(bl).width(); 
 $(ul).animate({marginLeft: "-"+step*obj}, 600); 
}
$(document).on("click", ".header_wrapper_container_slider .nav span", function() { // Смена картинки слайдера по клику
 var sl = $(this).closest(".header_wrapper_container_slider"); 
 $(sl).find("span").removeClass("on"); // убираем активный элемент меню
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;

});