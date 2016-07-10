var modal = {

  modalOn: function(correctAnswer, error, arr) {
      

      if (error == true) {
          var feedback = "Тест не пройден! Результаты теста:<br>";
          return feedback;

      for(var i = 0; i < arr.length; i++){
          var num = i+1;

          feedback = feedback + "<br>    Вопрос №" + num + "";
              if(arr[i] != correct[i]){
                  feedback = feedback + "<br>    Правильный ответ: " + correct[i] + "<br>";
                } else 
                  feedback = feedback+": Верно! <br>";
                  
              } 

      //     $("div.modal-body p.testResults").html(feedback + "<br>Вы дали "+correctAnswer+" правильный(ых) ответ(а). Попробуйте еще раз!");

      // } else {
        
      //   $("div.modal-body p.testResults").html("Тест пройден! Поздравляем!");

      // }
      }

    }
}
module.exports = modal;
