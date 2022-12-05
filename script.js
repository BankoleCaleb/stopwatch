let button = document.getElementsByTagName("button")
let buttonStart = button[0]
let buttonStop = button[1]
let buttonReset = button[2]
let hour = 0
let tens = 0
let minutes = 0
let seconds = 0
let interval
let minContainer = document.getElementById("minutes")
let hourContainer = document.getElementById("hours")
let tenContainer = document.getElementById("tens")
let secondContainer = document.getElementById("seconds")
buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(runStopwatch, 10)
}

buttonStop.onclick = () => {
  clearInterval(interval)
}

buttonReset.onclick = () => {
  minContainer.innerText = "00";
  hourContainer.innerText = "00";
  tenContainer.innerText = "00";
  secondContainer.innerText = "00";
  hour = 0;
  tens = 0;
  minutes = 0;
  seconds = 0;
  clearInterval(interval)
}

const runStopwatch = () => {

  tens++ 
  // console.log(tenContainer.innerText)
  tenContainer.innerText = tens;
  if(tens > 99) {
    tens = 0;
    seconds++;
    secondContainer.innerText = seconds;
  }
    if(seconds <= 9) {
      secondContainer.innerText = "0" + seconds;
    }
    if(tens <= 9) {
      tenContainer.innerText = "0" + tens;
      
    }
    if(minutes <= 9) {
      minContainer.innerText = "0" + minutes;
    }
    if(hour <= 9) {
      hourContainer.innerText = "0" + hour;
    }

  if(seconds >= 60) {
    seconds = 0;
    secondContainer.innerText = 0;
    minutes++;
    minContainer.innerText = minutes;
  } 

  if(minutes >= 60) {
    minutes = 0;
    minContainer.innerText = 0;
    hour++;
    hourContainer.innerText = hour;
  }
}
