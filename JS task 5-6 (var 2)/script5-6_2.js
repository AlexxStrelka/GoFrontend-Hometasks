var startButton = document.querySelector('.start');
var clearButton = document.querySelector('.clear');

function setTimer(event) {   //Main timer function................
	var ms = document.getElementById('msc');
	var second = document.getElementById('s');
	var minute = document.getElementById('m');
	var hour = document.getElementById('h');

	var currentTime = new Date();
  ms.innerHTML = currentTime.getSeconds();

  if (currentTime.getMilliseconds() > 998) {
	second.innerHTML++;
	var sec = second.innerHTML;
  if (sec < 10) {second.innerHTML = "0" + sec};
	}

	if (sec > 59) {
	second.innerHTML = "00";
	minute.innerHTML++;
	var min = minute.innerHTML;
	if (min < 10) {minute.innerHTML = "0" + min};
	}

	if (min > 59) {
	minute.innerHTML = "00";
	hour.innerHTML++;
	var hr = hour.innerHTML;
	if (hr < 10) {hour.innerHTML = "0" + hr};
	}

	if (hr == 24) {
	alert ('Time is over'); 
	window.location.reload();
	return;
	} 

	 buttonPause ();// Change of START to PAUSE
  timerId = setTimeout(setTimer, 10);
 }



// Change in the button color section..................

function buttonPause () {

	var startButton = document.querySelector('.start');
	startButton.removeEventListener('click', setTimer);

	startButton.id = 'pause';
	startButton.innerHTML = "PAUSE";
	var startButton = document.getElementById('pause');
	startButton.addEventListener('click', buttonContinue);
}

function buttonContinue () {

	clearTimeout(timerId);
	startButton.removeAttribute('id');
	startButton.id = 'continue';
	startButton.innerHTML = "CONTINUE";
	startButton.removeEventListener('click', buttonContinue);
	startButton.addEventListener('click', setTimer);
}

// function next() {
// 	// buttonPause ();
// 	setTimer();
// }

// // Сброс таймера кнопкой CLEAR.....................
function endTimer () {
	clearTimeout(timerId);
	var msc = document.getElementById('msc');
	var second = document.getElementById('s');
	var minute = document.getElementById('m');
	var hour = document.getElementById('h');
	startButton.removeAttribute('id');
	startButton.innerHTML = "START";
	msc.innerHTML = "000";
	second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
}

startButton.addEventListener('click', setTimer);
clearButton.addEventListener('click', endTimer);





