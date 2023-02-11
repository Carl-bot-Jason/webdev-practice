const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 0;

function stopWatch(){
	seconds++;
	if(seconds == 60){
		minutes++;
		seconds = 0;
		if(minutes == 60){
			hours++;
			minutes = 0;
		}
	}

	if(seconds < 10){
		leadingSeconds = "0" + seconds.toString();
	} else{
		leadingSeconds = seconds;
	}
	if(minutes < 10){
		leadingMinutes = "0" + minutes.toString();
	} else{
		leadingMinutes = minutes;
	}
	if(hours < 10){
		leadingHours = "0" + hours.toString();
	} else{
		leadingHours = hours;
	}

	document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener('click', function(){
	if(timerStatus == 0){
		timerInterval = window.setInterval(stopWatch,1000);
		startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
		timerStatus = 1;
	} else{
		window.clearInterval(timerInterval);
		startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
		timerStatus = 0;
	}
});

resetBtn.addEventListener('click', function(){
	seconds = -1, hours = 0, minutes = 0;
	stopWatch();
	startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';

	window.clearInterval(timerInterval);
	timerStatus = 0;
});

// window.setInterval(stopWatch,1000);