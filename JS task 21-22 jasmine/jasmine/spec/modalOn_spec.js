describe("check test", function() {
  it("in case of error in answers should throw a message about failure", function() {
  	//prepare
		var error = true;
  	//act
		var feedback = modal.modalOn(3, error, [1, 3, 4]);
      	//assert
    expect(feedback).toEqual("Тест не пройден! Результаты теста:<br>");
  });
  
});