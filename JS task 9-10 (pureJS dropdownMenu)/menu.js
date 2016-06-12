document.addEventListener('DOMContentLoaded', function() { 


    console.log("function start");
    // Находим пункты в меню и подменю, выпадающие при наведении
    var dropdown = document.querySelector(".menu li.dropdown > a");
    var submenu1 = document.querySelector("ul.submenu1");
    var dropdownSub = document.querySelector(".submenu1 .dropdown-sub > a");

    var submenu2 = document.querySelector("ul.submenu2");
    var dropdownSub2 = document.querySelector(".submenu2 .dropdown-sub > a");

    var submenu3 = document.querySelector("ul.submenu3");
    //Поля, где срабатывает mouseout
    var returnArea = document.getElementById('returnArea'); 
    var returnArea2 = document.querySelector('div.title');
    var submenu1__ReturnArea1 = document.querySelector('li.dropdown-sub__return1');
    var submenu1__ReturnArea2 = document.querySelector('li.dropdown-sub__return2');
    var submenu2__ReturnArea1 = document.querySelector('li.dropdown-sub2__return1');
    var submenu2__ReturnArea2 = document.querySelector('li.dropdown-sub2__return2');
    

   
    
// Вешаем обработчики событий только на верхнее меню Nav 3
    dropdown.addEventListener("mouseover", mainDropdown);
        

 //Выпадающее подменю для главного меню Nav 3
  function mainDropdown(e) {
      e.preventDefault();
      
          animate(function(timePassed) {
            submenu1.style.height = timePassed / 2 + 'px';
          }, 410);

      //обработчики для сворачивания выпавшего подменю
      returnArea.addEventListener("mouseover", mainDropdownReturn); 
      returnArea2.addEventListener("mouseover", mainDropdownReturn);
      
      //добавляем обработчик для выпадания подменю 2го уровня Nav 3.4
      dropdownSub.addEventListener("mouseover", submenuDropdown);
    };

//Функция сворачивания всех раскрытых меню!!!
function mainDropdownReturn(e) {
  
      animate(function(timePassed)  {
          
      if  (submenu1.style.height !== 0) {
      submenu1.style.height = 206 - timePassed / 2 + 'px';
      }
      if  (submenu2.style.height !== 0) {
      submenu2.style.height = 206 - timePassed / 2 + 'px';
      }
      if  (submenu3.style.height !== 0) {
      submenu3.style.height = 206 - timePassed / 2 + 'px';
      }

      }, 412);

  submenu1.style.overflow = "hidden";
  submenu2.style.overflow = "hidden";

  returnArea.removeEventListener("mouseover", mainDropdownReturn);
  returnArea2.removeEventListener("mouseover", mainDropdownReturn);
  
}


//Выпадающее подменю для submenu1 Nav 3.4
  
function submenuDropdown(e) {
        e.preventDefault();
        console.log(submenu2);

      submenu1.style.overflow = "visible";

      animate(function(timePassed) {
        submenu2.style.height = timePassed / 2 + 'px';
      }, 410);

      submenu2.style.overflow = "hidden";
      
      //добавляем обработчик для выпадания подменю 3го уровня Nav 3.4.2
      dropdownSub2.addEventListener("mouseover", submenuDropdown2);

      //Обработчик на сворачивания submenu2 при переходе на другие пункты submenu1
      submenu1__ReturnArea1.addEventListener("mouseover", submenuDropdownReturn);
      submenu1__ReturnArea2.addEventListener("mouseover", submenuDropdownReturn);

};


//Выпадающее подменю для submenu2 in  Nav 3.4.2
  function submenuDropdown2(e) {
        e.preventDefault();
        console.log(submenu3);

        submenu2.style.overflow = "visible";

        animate(function(timePassed) {
        submenu3.style.height = timePassed / 2 + 'px';
      }, 410);

      //Обработчик на сворачивания submenu3 при переходе на другие пункты submenu2
      submenu2__ReturnArea1.addEventListener("mouseover", submenu2DropdownReturn);
      submenu2__ReturnArea2.addEventListener("mouseover", submenu2DropdownReturn);
    };



//Функция сворачивания для подменю submenu2.....
function submenuDropdownReturn(e) {
  
      animate(function(timePassed)  {
          
     if  (submenu2.style.height !== 0) {
      submenu2.style.height = 206 - timePassed / 2 + 'px';
      }
      }, 412);

  submenu1__ReturnArea1.removeEventListener("mouseover", submenuDropdownReturn);
  submenu1__ReturnArea2.removeEventListener("mouseover", submenuDropdownReturn);
}

//Функция сворачивания для подменю submenu3.....
function submenu2DropdownReturn(e) {
  
      animate(function(timePassed)  {
              
      if  (submenu3.style.height !== 0) {
      submenu3.style.height = 206 - timePassed / 2 + 'px';
      }
      }, 412);

  submenu2__ReturnArea1.removeEventListener("mouseover", submenu2DropdownReturn);
  submenu2__ReturnArea2.removeEventListener("mouseover", submenu2DropdownReturn);
}



// Рисует функция draw
// Продолжительность анимации duration
function animate(draw, duration) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // определить, сколько прошло времени с начала анимации
    var timePassed = time - start;

    if (timePassed > duration) timePassed = duration;

    draw(timePassed);

    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}



});
