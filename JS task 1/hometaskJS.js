

var InsertNum = prompt('Укажите число которое хотите возвести в степень:',100);
// console.log('Пользователь ввел: ', InsertNum);
// console.log('Пользователь ввел type: ', typeof InsertNum);


var InsertExponent = prompt('Укажите степень:', 100);
// console.log('Пользователь ввел: ', InsertExponent);
// console.log('Пользователь ввел type: ', typeof InsertExponent);

ExtentPow()


function ExtentPow() {
	var InsertNum2 = +InsertNum;
	var InsertExponent2 = +InsertExponent;
	console.log('После приведения в переменной записано ', InsertNum2);
	console.log('Тип после приведения: ', typeof InsertNum2);
	console.log('После приведения в переменной записано: ', InsertExponent2);
	console.log('Тип после приведения: ', typeof InsertExponent2);
	
	if ( isNaN(InsertNum2) || InsertNum2 == "undefined" || parseInt(InsertNum2) !== InsertNum2) {
	alert('Вычисление не может быть выполнено без указания целого числа');
	console.log('InsertNum2 = ', InsertNum2);
	}

	else if (isNaN(InsertExponent2) || InsertExponent2 == "undefined" || parseInt(InsertExponent2) !== InsertExponent2 ) {
		alert('Вычисление не может быть выполнено без указания целой степени');
		console.log('InsertExponent = ', InsertExponent2);
	} 
	

	else if (InsertExponent2 < 0)	{
	  var i=0;
		var FinalResult = InsertNum2;
				
		while (i <= ((InsertExponent2*-1)-2) ) {
		var FinalResult = FinalResult*InsertNum2;
		i++;
		console.log('i = ', i);
		console.log('FinalResult = ', FinalResult);
		}

		var FinalResult = 1 / FinalResult;
		console.log('FinalResult для отрицательной степени = ', FinalResult);
	} else {
		var i=0;
		var FinalResult = InsertNum2;

		while (i <= (InsertExponent2-2) ) {
		var FinalResult = FinalResult*InsertNum2;
		i++;
		console.log('i = ', i);
		console.log('FinalResult = ', FinalResult);
		}
	}

	console.log('Ваш результат: '+InsertNum2+' в степени '+InsertExponent2+' = '+FinalResult);
	// alert('Ваш результат: '+InsertNum2+' в степени '+InsertExponent2+' = '+FinalResult);
}




 
