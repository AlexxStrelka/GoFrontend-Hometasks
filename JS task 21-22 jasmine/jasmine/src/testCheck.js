//Функция проверяет введенные ответы и сравнивает их справильными из объекта correct
var testCheckFunc = {

  testCheck: function ($forms, correct) {
  
  // var $forms = $(".inputClass:checked + label");
  var arr = [];// Массив для ответов
  var error = false;
  var correctAnswer = 0;


        $forms.each (function (i) {

          if ($($forms[i]).text() == correct[i]) {
            
            correctAnswer = correctAnswer+1;
            arr.push($($forms[i]).text());
            
          } else {

            error = true;
            arr.push($($forms[i]).text());
            
          }
         
      });

        return correctAnswer;
      // modalOn(correctAnswer, error, arr);
}
}

