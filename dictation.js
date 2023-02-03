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
  // $("#promptImage").attr("style", "object-fit: fill;");
  $("#promptImage").attr("src", answer);
  // $("#promptImage").attr("width", "50%");
  // $("#answer").attr("src", answer);
  // $("#answer").attr("style","visibility: visible");
  $("#buttonShow").hide();
  $("#buttonHide").attr("style","visibility: visible");
  // $("#prompt").attr("style","visibility: hidden");

}

function hidePicture(prompt) {
  // $("#promptImage").attr("style", "object-fit: fill;");
  $("#promptImage").attr("src", prompt);
  // $("#promptImage").attr("width", "10%");
  // $("#answer").attr("style","visibility: hidden");
  $("#buttonShow").show();
  $("#buttonHide").attr("style","visibility: hidden");
  // $("#prompt").attr("style","visibility: visible");
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

var harmonicday = [ 
  [ "/harmonicday1/harmonicday1a.html",
  "/harmonicday1/harmonicday1b.html",
  "/harmonicday1/harmonicday1c.html",
  // "/harmonicday1/harmonicday1d.html",
  // "/harmonicday1/harmonicday1e.html",
  // "/harmonicday1/harmonicday1f.html",
  // "/harmonicday1/harmonicday1g.html",
  // "/harmonicday1/harmonicday1h.html"
  ], [
  "/harmonicday2/harmonicday2a.html",
  "/harmonicday2/harmonicday2b.html",
  "/harmonicday2/harmonicday2c.html",
  // "/harmonicday2/harmonicday2d.html",
  // "/harmonicday2/harmonicday2e.html",
  // "/harmonicday2/harmonicday2f.html",
  // "/harmonicday2/harmonicday2g.html",
  // "/harmonicday2/harmonicday2h.html"
  ], [
  "/harmonicday3/harmonicday3a.html",
  "/harmonicday3/harmonicday3b.html",
  "/harmonicday3/harmonicday3c.html",
  "/harmonicday3/harmonicday3d.html",
  "/harmonicday3/harmonicday3e.html",
  // "/harmonicday3/harmonicday3f.html",
  // "/harmonicday3/harmonicday3g.html",
  // "/harmonicday3/harmonicday3h.html"
  ], [
  "/harmonicday4/harmonicday4a.html",
  "/harmonicday4/harmonicday4b.html",
  "/harmonicday4/harmonicday4c.html",
  // "/harmonicday4/harmonicday4d.html",
  // "/harmonicday4/harmonicday4e.html",
  // "/harmonicday4/harmonicday4f.html",
  // "/harmonicday4/harmonicday4g.html",
  // "/harmonicday4/harmonicday4h.html"
  ], ["break"
  ], [
  "/harmonicday6/harmonicday6a.html",
  "/harmonicday6/harmonicday6b.html",
  "/harmonicday6/harmonicday6c.html",
  // "/harmonicday6/harmonicday6d.html",
  // "/harmonicday6/harmonicday6e.html",
  // "/harmonicday6/harmonicday6f.html",
  // "/harmonicday6/harmonicday6g.html",
  // "/harmonicday6/harmonicday6h.html"
  ], [
  "/harmonicday7/harmonicday7a.html",
  "/harmonicday7/harmonicday7b.html",
  "/harmonicday7/harmonicday7c.html",
  // "/harmonicday7/harmonicday7d.html",
  // "/harmonicday7/harmonicday7e.html",
  // "/harmonicday7/harmonicday7f.html",
  // "/harmonicday7/harmonicday7g.html",
  // "/harmonicday7/harmonicday7h.html"
  ], [
  "/harmonicday8/harmonicday8a.html",
  "/harmonicday8/harmonicday8b.html",
  "/harmonicday8/harmonicday8c.html",
  // "/harmonicday8/harmonicday8d.html",
  // "/harmonicday8/harmonicday8e.html",
  // "/harmonicday8/harmonicday8f.html",
  // "/harmonicday8/harmonicday8g.html",
  // "/harmonicday8/harmonicday8h.html"
  ], [
  "/harmonicday9/harmonicday9a.html",
  "/harmonicday9/harmonicday9b.html",
  "/harmonicday9/harmonicday9c.html",
  // "/harmonicday9/harmonicday9d.html",
  // "/harmonicday9/harmonicday9e.html",
  // "/harmonicday9/harmonicday9f.html",
  // "/harmonicday9/harmonicday9g.html",
  // "/harmonicday9/harmonicday9h.html"
  ]
];

function chooseDictation(harmonicdayx, day, ex) {
  if (ex == undefined) {
    var randomNum = Math.floor(Math.random() * harmonicday[day].length);
    document.getElementById(harmonicdayx).href = harmonicday[day][randomNum];
  } else {
    var previousNum = ex;
    var randomNum = Math.floor(Math.random() * harmonicday[day].length);
    while (randomNum == previousNum) {
      randomNum = Math.floor(Math.random() * harmonicday[day].length);
    }
    document.getElementById(harmonicdayx).href = harmonicday[day][randomNum];
  }
}

var melodicday = [ 
  [ "/melodicday1/melodicday1a.html",
  "/melodicday1/melodicday1b.html",
  "/melodicday1/melodicday1c.html",
  // "/melodicday1/melodicday1d.html",
  // "/melodicday1/melodicday1e.html",
  // "/melodicday1/melodicday1f.html",
  // "/melodicday1/melodicday1g.html",
  // "/melodicday1/melodicday1h.html"
  ], [
  "/melodicday2/melodicday2a.html",
  "/melodicday2/melodicday2b.html",
  "/melodicday2/melodicday2c.html",
  // "/melodicday2/melodicday2d.html",
  // "/melodicday2/melodicday2e.html",
  // "/melodicday2/melodicday2f.html",
  // "/melodicday2/melodicday2g.html",
  // "/melodicday2/melodicday2h.html"
  ], [
  "/melodicday3/melodicday3a.html",
  "/melodicday3/melodicday3b.html",
  "/melodicday3/melodicday3c.html",
  // "/melodicday3/melodicday3d.html",
  // "/melodicday3/melodicday3e.html",
  // "/melodicday3/melodicday3f.html",
  // "/melodicday3/melodicday3g.html",
  // "/melodicday3/melodicday3h.html"
  ], ["break"
  ], [
  "/melodicday5/melodicday5a.html",
  "/melodicday5/melodicday5b.html",
  "/melodicday5/melodicday5c.html",
  // "/melodicday5/melodicday5d.html",
  // "/melodicday5/melodicday5e.html",
  // "/melodicday5/melodicday5f.html",
  // "/melodicday5/melodicday5g.html",
  // "/melodicday5/melodicday5h.html"
  ], [
  "/melodicday6/melodicday6a.html",
  "/melodicday6/melodicday6b.html",
  "/melodicday6/melodicday6c.html",
  // "/melodicday6/melodicday6d.html",
  // "/melodicday6/melodicday6e.html",
  // "/melodicday6/melodicday6f.html",
  // "/melodicday6/melodicday6g.html",
  // "/melodicday6/melodicday6h.html"
  ], [
  "/melodicday7/melodicday7a.html",
  "/melodicday7/melodicday7b.html",
  "/melodicday7/melodicday7c.html",
  // "/melodicday7/melodicday7d.html",
  // "/melodicday7/melodicday7e.html",
  // "/melodicday7/melodicday7f.html",
  // "/melodicday7/melodicday7g.html",
  // "/melodicday7/melodicday7h.html"
  ]
];

function chooseMelDictation(melodicdayx, day, ex) {
  if (ex == undefined) {
    var randomNum = Math.floor(Math.random() * melodicday[day].length);
    document.getElementById(melodicdayx).href = melodicday[day][randomNum];
  } else {
    var previousNum = ex;
    var randomNum = Math.floor(Math.random() * melodicday[day].length);
    while (randomNum == previousNum) {
      randomNum = Math.floor(Math.random() * melodicday[day].length);
    }
    document.getElementById(melodicdayx).href = melodicday[day][randomNum];
  }
}

