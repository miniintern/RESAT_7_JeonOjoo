var running = false
var first_running = true

let timerInterval;
let totalSeconds;

function start() {
    stop();
    console.log('start')
    running = true
   
    let hour = parseInt(document.querySelector("#hours").value) || 0;
    let min = parseInt(document.querySelector("#min").value) || 0;
    let sec = parseInt(document.querySelector("#sec").value) || 0;


    console.log('hour:' ,hour);
    console.log('min::' ,min);

    if(first_running){
    totalSeconds = hour * 3600 + min * 60 + sec;
    first_running = false
    updateDisplay();
    }

    

    timerInterval = setInterval(function () {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        console.log("Time is up");
        return;
      }
      if(!running){
        clearInterval(timerInterval);
        return;
    }
      totalSeconds--;
      updateDisplay();
    }, 1000);

  }
	
function updateDisplay() {
    if(!running) return
    var hour = Math.floor(totalSeconds / 3600);
    var min = Math.floor((totalSeconds % 3600) / 60);
    var sec = totalSeconds % 60;
   

    document.querySelector("#hours").value = hour;
	document.querySelector("#min").value = min;
	document.querySelector("#sec").value = sec;
  }

function stop() {
    running = false
}

function reset() {
    stop();
    first_running = true;
	document.querySelector("#hours").value = 0;
	document.querySelector("#min").value = 0;
	document.querySelector("#sec").value = 0;
    totalSeconds = 0
    
}

