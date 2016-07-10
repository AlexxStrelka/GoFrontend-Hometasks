describe("check test", function() {
	it("should return correctAnswer = 3 in case all the answers are correct", function() {
  	//prepare
  	var $forms = $(".inputClass:checked + label");
		var correct = [1, 5, 8];
  	//act
		var result = testCheckFunc.testCheck($forms, correct);
      	//assert
    expect(result).toEqual(3);
  });


  
});