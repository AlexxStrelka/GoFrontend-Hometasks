describe("check test", function() {
  it("when not all the checkboxes are marked throws a message", function() {
  	//prepare
		var $forms = 2;
  	//act
		var alert = preCheck.testPreCheck(2);
    //assert
    expect(alert).toEqual("Пожалуйста, ответьте на все вопросы!");
  });
  
});