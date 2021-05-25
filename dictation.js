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

var previousNum;

var harmonicday = [ 
  [ "/harmonicday1/harmonicday1a.html",
  "/harmonicday1/harmonicday1b.html"
  // "/harmonicday1/harmonicday1c.html",
  // "/harmonicday1/harmonicday1d.html",
  // "/harmonicday1/harmonicday1e.html",
  // "/harmonicday1/harmonicday1f.html",
  // "/harmonicday1/harmonicday1g.html",
  // "/harmonicday1/harmonicday1h.html"
  ], [
  "/harmonicday2/harmonicday2a.html",
  "/harmonicday2/harmonicday2b.html",
  // "/harmonicday2/harmonicday2c.html",
  // "/harmonicday2/harmonicday2d.html",
  // "/harmonicday2/harmonicday2e.html",
  // "/harmonicday2/harmonicday2f.html",
  // "/harmonicday2/harmonicday2g.html",
  // "/harmonicday2/harmonicday2h.html"
  ], [
  "/harmonicday3/harmonicday3a.html",
  "/harmonicday3/harmonicday3b.html",
  // "/harmonicday3/harmonicday3c.html",
  // "/harmonicday3/harmonicday3d.html",
  // "/harmonicday3/harmonicday3e.html",
  // "/harmonicday3/harmonicday3f.html",
  // "/harmonicday3/harmonicday3g.html",
  // "/harmonicday3/harmonicday3h.html"
  ], [
  "/harmonicday4/harmonicday4a.html",
  "/harmonicday4/harmonicday4b.html",
  // "/harmonicday4/harmonicday4c.html",
  // "/harmonicday4/harmonicday4d.html",
  // "/harmonicday4/harmonicday4e.html",
  // "/harmonicday4/harmonicday4f.html",
  // "/harmonicday4/harmonicday4g.html",
  // "/harmonicday4/harmonicday4h.html"
  ], ["break"
  ], [
  "/harmonicday6/harmonicday6a.html",
  "/harmonicday6/harmonicday6b.html",
  // "/harmonicday6/harmonicday6c.html",
  // "/harmonicday6/harmonicday6d.html",
  // "/harmonicday6/harmonicday6e.html",
  // "/harmonicday6/harmonicday6f.html",
  // "/harmonicday6/harmonicday6g.html",
  // "/harmonicday6/harmonicday6h.html"
  ], [
  "/harmonicday7/harmonicday7a.html",
  "/harmonicday7/harmonicday7b.html",
  // "/harmonicday7/harmonicday7c.html",
  // "/harmonicday7/harmonicday7d.html",
  // "/harmonicday7/harmonicday7e.html",
  // "/harmonicday7/harmonicday7f.html",
  // "/harmonicday7/harmonicday7g.html",
  // "/harmonicday7/harmonicday7h.html"
  ], [
  "/harmonicday8/harmonicday8a.html",
  "/harmonicday8/harmonicday8b.html",
  // "/harmonicday8/harmonicday8c.html",
  // "/harmonicday8/harmonicday8d.html",
  // "/harmonicday8/harmonicday8e.html",
  // "/harmonicday8/harmonicday8f.html",
  // "/harmonicday8/harmonicday8g.html",
  // "/harmonicday8/harmonicday8h.html"
  ], [
  "/harmonicday9/harmonicday9a.html",
  "/harmonicday9/harmonicday9b.html",
  // "/harmonicday9/harmonicday9c.html",
  // "/harmonicday9/harmonicday9d.html",
  // "/harmonicday9/harmonicday9e.html",
  // "/harmonicday9/harmonicday9f.html",
  // "/harmonicday9/harmonicday9g.html",
  // "/harmonicday9/harmonicday9h.html"
  ]
];

function chooseDictation(harmonicdayx, x) {
  console.log("clicked");
    var randomNum = Math.floor(Math.random() * harmonicday[x].length);
    while (randomNum == previousNum) {
      randomNum = Math.floor(Math.random() * harmonicday[x].length);
    }
    previousNum = randomNum;
    console.log("should change now");
    document.getElementById(harmonicdayx).href = harmonicday[x][randomNum];
    // document.getElementById(harmonicdayx).href = "/index.html";
}