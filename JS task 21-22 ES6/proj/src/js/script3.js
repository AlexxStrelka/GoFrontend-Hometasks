
$(function () {


const testInfo = {
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
const correct = ["Вариант ответа №3",  "Вариант ответа №1", "Вариант ответа №1"];


localStorage.setItem("test",JSON.stringify(testInfo))
let TestSet = JSON.parse(localStorage.getItem("test"))


//Выводим html из тега скрипт по #testId и запускаем шаблонизатор
let $testTemplate = $("#testId").html();
let content = tmpl($testTemplate, TestSet);
      
      $('body').append(content);


//Меняем чекбоксы, чтобы выбрать можно было только один вариант. Без эого блока выбрать можно много вариантов.
let $answers = $("input[type=checkbox]");
    
    $answers.change(function(){
        $(this).siblings().filter(':checked').not(this).removeAttr('checked');
    });

	

let buttonSub = document.querySelector("div.button");
buttonSub.addEventListener("click", testPreCheck);


//Проверяем, все ли галочки проставлены
function testPreCheck(e) {
        let $forms = $(".inputClass:checked");

        if($forms.length == 3) {

          testCheck();

        } else {

          alert("Пожалуйста, ответьте на все вопросы!")

        }
}


//Функция проверяет введенные ответы и сравнивает их справильными из объекта correct
function testCheck(e) {
  
  let $forms = $(".inputClass:checked + label");
  const arr = [];// Массив для ответов
  let error = false;
  let correctAnswer = 0;


        $forms.each (function (i) {

          if ($($forms[i]).text() == correct[i]) {
            
            correctAnswer = correctAnswer+1;
            arr.push($($forms[i]).text());
            
          } else {

            error = true;
            arr.push($($forms[i]).text());
            
          }
         
      });

      modalOn(correctAnswer, error, arr);
}

//Функция выводит модальное окно с результатами теста
function modalOn(correctAnswer, error, arr) {
      

      if (error == true) {
          let feedback = `Тест не пройден! Результаты теста:<br>`;
          let i = 0;//counter

      for(let value of arr){
          let num = i+1;

          feedback = `${feedback} <br>Вопрос № ${num} `;
              if(value != correct[i]){
                  feedback = `${feedback} <br>Правильный ответ: ${correct[i]}<br>`;
                } else 
                  feedback = `${feedback}: Верно!<br>`;
               i++;   
              } 

          $("div.modal-body p.testResults").html(`${feedback} <br>Вы дали ${correctAnswer} правильный(ых) ответ(а). Попробуйте еще раз!`);

      } else {
        
        $("div.modal-body p.testResults").html("Тест пройден! Поздравляем!");

      }

    //Вызываем модальное окно с результатами
    $("#basicModal").modal('show');
    //console.log("array 2 modal", arr);

    //По нажатию на кнопку Close снимаем все флажки
    $("button[data-dismiss=modal]").click(function (){
        $("input[type=checkbox]").removeAttr('checked');
        const arr = []; //Обнуляем массив для ответов
        return arr;
        
    });
}


});
