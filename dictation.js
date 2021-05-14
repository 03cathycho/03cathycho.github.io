var count = 0;
var time = 0;
var display = document.querySelector('#time');
var secondTime = 30000;
var thirdTime = 30000 + 45000;
var fourthTime = 30000 + 45000 + 60000;
var x = document.getElementById("prompt"); 

$("#insertScore").html(count);

function startTimer(duration, display) {
  var currentSec = duration;
  function timer() {
      display.textContent = currentSec + " seconds"; 
      console.log(currentSec); 
      if (currentSec <= 0) {
        clearInterval(myInterval);
      }
      currentSec--;
  };
  // we don't want to wait a full second before the timer starts
  timer();
  var myInterval = setInterval(timer, 1000);
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
  $(".startDictation"). html("Dictation started");
  // $(".startDictation").hide();

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