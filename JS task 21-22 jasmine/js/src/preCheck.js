var preCheck = {

		testPreCheck: function ($forms) {
		        // var $forms = $(".inputClass:checked");

		        if($forms.length == 3) {

		          testCheck();

		        } else {

		          var alert = "Пожалуйста, ответьте на все вопросы!";
		          return alert;

		        }
		}
}

module.exports = preCheck;