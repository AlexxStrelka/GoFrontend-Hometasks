
$(function() {
    $('.jcarousel').jcarousel({
        // Конфигурация инициализации
    });

    $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
    $('.jcarousel-next').jcarouselControl({ target: '+=1' });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

		$('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  	});

    $("select").selectbox({
      listboxMaxSize: 20,
    });

});























// window.onload = function(){

     

//     var block = window.document.getElementById("test"), // элемент

//         anim,                                   // таймаут

//         start,                                  // время старта

//         now,                                        // текущее время

//         duration = 1000,                            // продолжительность

//         from = 0,                                   // стартовая позиция

//         to = window.innerWidth/2,                   // финишная позиция

//         progress = 0,                               // прогресс анимации

//         x;                                      // позиция в текущий момент времени

     

//     // закон приращения аргумента (easing)

//     function delta(param){

//         return param;

//     };

     

//     // рендер

//     function render(){

//         now = new Date().getTime();

//         progress = (now-start)/duration;

//         x = (to - from)*delta(progress) + from;

         

//         test.style.left = x+"px";

         

//         // если не конец выполняем анимацию еще

//         if (progress < 1) anim = setTimeout(arguments.callee, 0)

//             // иначе заканчиваем анимацию

//             else

//             {

//                 clearTimeout(anim);

//                 progress = 0;

//             };

//     };

     

//     window.onclick = function(){

//         start = new Date().getTime();

//         render();

//     };

 

// };
