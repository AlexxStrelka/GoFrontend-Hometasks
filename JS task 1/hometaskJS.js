

var InsertNum = prompt('Укажите число которое хотите возвести в степень:',100);

var InsertExponent = prompt('Укажите степень:', 100);


ExtentPow()


function ExtentPow() {
	var InsertNum2 = +InsertNum;
	var InsertExponent2 = +InsertExponent;
		
	if ( isNaN(InsertNum2) || InsertNum2 == "undefined" || parseInt(InsertNum2) !== InsertNum2) {
	alert('Вычисление не может быть выполнено без указания целого числа');
	}

	else if (isNaN(InsertExponent2) || InsertExponent2 == "undefined" || parseInt(InsertExponent2) !== InsertExponent2 ) {
		alert('Вычисление не может быть выполнено без указания целой степени');
	} 
	

	else if (InsertExponent2 < 0)	{
	  var i=0;
		var FinalResult = InsertNum2;
				
		while (i <= ((InsertExponent2*-1)-2) ) {
		var FinalResult = FinalResult*InsertNum2;
		i++;
		}
		var FinalResult = 1 / FinalResult;
		console.log('FinalResult для отрицательной степени = ', FinalResult);
	} else {
		var i=0;
		var FinalResult = InsertNum2;

		while (i <= (InsertExponent2-2) ) {
		var FinalResult = FinalResult*InsertNum2;
		i++;
		}
	}

	console.log('Ваш результат: '+InsertNum2+' в степени '+InsertExponent2+' = '+FinalResult);
	// alert('Ваш результат: '+InsertNum2+' в степени '+InsertExponent2+' = '+FinalResult);
}




 
