
$(function () {

'use strict'

var testInfo = {
  question1: "Вопрос №1",
  answer1_1: "Вариант ответа №1",
  answer1_2: "Вариант ответа №2",
  answer1_3_correct: "Вариант ответа №3",
  question2: "Вопрос №1",
  answer2_1_correct: "Вариант ответа №1",
  answer2_2: "Вариант ответа №2",
  answer2_3: "Вариант ответа №3",
  question3: "Вопрос №1",
  answer3_1_correct: "Вариант ответа №1",
  answer3_2: "Вариант ответа №2",
  answer3_3: "Вариант ответа №3",
}

//Сохраняем правильные ответы в массив
var correct = ["Вариант ответа №2", "Вариант ответа №3",  "Вариант ответа №1", "Вариант ответа №1", "Вариант ответа №2"];




localStorage.setItem("test",JSON.stringify(testInfo))
var TestSet = JSON.parse(localStorage.getItem("test"))


//Выводим html из тега скрипт по #testId и запускаем шаблонизатор
var $testTemplate = $("#testId").html();
var content = tmpl($testTemplate, TestSet);
      
      $('body').append(content);


//Меняем чекбоксы, чтобы выбрать можно было только один вариант. Без эого блока выбрать можно много вариантов.
// var $answers = $("input[type=checkbox]");
    
//     $answers.change(function(){
//         $(this).siblings().filter(':checked').not(this).removeAttr('checked');
//     });

	

var buttonSub = document.querySelector("div.button");
buttonSub.addEventListener("click", testPreCheck);


//Проверяем, во всех ли блоках проставлены галочки 
function testPreCheck(e) {
        var $forms = $(".formClass");
        var counter = 0;

            $forms.each (function (i) {

                var $foundItems = $($forms[i]).find(":checked");
                if ($foundItems.prop( "checked" ) == true) counter++;
                
            });

        if (counter !== 3) {

          alert("Пожалуйста, ответьте на все вопросы!");

        } else {

          testCheck();
        }

}


//Функция проверяет введенные ответы и сравнивает их справильными из объекта correct
var correctAnswer = 0;

function testCheck(e) {
  
  var $forms = $(".inputClass:checked + label");
  
  var error = false;
  

        $forms.each (function (i) {

          if ($($forms[i]).text() !== correct[i]) error = true; 
         
      });

      modalOn(error);
}

//Функция выводит модальное окно с результатами теста
function modalOn(error) {
  
      if (error == true) {

          $("div.modal-body p.testResults").html("Тест не пройден. Попробуйте еще раз!");

      } else {
        
        $("div.modal-body p.testResults").html("Тест пройден! Поздравляем!");

      }

    //Вызываем модальное окно с результатами
    $("#basicModal").modal('show');

    //По нажатию на кнопку Close снимаем все флажки
    $("button[data-dismiss=modal]").click(function (){
        $("input[type=checkbox]").removeAttr('checked');
    });
}

});
