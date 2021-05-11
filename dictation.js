var count = 0;
var time = 0;
var display = document.querySelector('#time');
var secondTime = 30000;
var thirdTime = 30000 + 45000;
var fourthTime = 30000 + 45000 + 60000;
var x = document.getElementById("prompt"); 

$("#insertScore").html(count);

function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 
      console.log(minutes + ":" + seconds); 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          // display.textContent = "00:00";
          // minutes = 0;
          // seconds = 0;
          // start = Date.now();
          //HOW DO YOU BREAK WITHOUT BREAKING PROGRAM??
          // return;
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

function showPicture(answer) {
  $("#answer").attr("src", answer);
  $("#answer").attr("style","visibility: visible");
  $("#buttonShow").hide();
  $("#buttonHide").attr("style","visibility: visible");
}

function hidePicture() {
  $("#answer").attr("style","visibility: hidden");
  $("#buttonShow").show();
  $("#buttonHide").attr("style","visibility: hidden");
}

function playSound() {
  x.play();
  count++;
  $("#insertScore").html(count);
}

function startDictation() {
  var recTime = Math.ceil(x.duration) * 1000;

  $(".startDictation"). attr("disabled", true);

  //1st
  setTimeout(function() {playSound() }, 0);    
  setTimeout(function() {startTimer(30, display) }, recTime);

  //2nd
  setTimeout(function() {playSound() }, recTime + secondTime);
  setTimeout(function() {startTimer(45, display) }, recTime * 2 + secondTime);

  //3rd
  setTimeout(function() {playSound() }, recTime * 2 + thirdTime);
  setTimeout(function() {startTimer(60, display) }, recTime * 3 + thirdTime);

  //4th
  setTimeout(function() {playSound() }, recTime * 3 + fourthTime);
  setTimeout(function() {startTimer(90, display) }, recTime * 4 + fourthTime);
}