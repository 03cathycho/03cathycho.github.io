var previous = 0;

window.onload = function () {
  $("#nextButton").hide();
  console.log("its hiding cuz it loaded");
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
  });
  // $("#navigation").load("/navigation.html");
};

function getRndInteger(min, max, excludeNum) {
  if (excludeNum == undefined) {
    x = Math.floor(Math.random() * (max - min)) + min;
    return x;
  } else {
    var x = excludeNum;
    while (x == excludeNum) {
      x = Math.floor(Math.random() * (max - min)) + min;
    }
    excludeNum = x;
    return x;
  }
}

// function getRndIntegerArray(int[] array) {
//   return Math.floor(Math.random() * (max - min)) + min;
// } -> for the more specified ones, e.g. choosing between [P4, P5, P8] (get length, random int from there and return the element)

// $(document).ready(function(){
//   $("#nextButton").hide();
//   console.log("its hiding cuz it loaded");
//   $("#nextButton").click(function(){
//     $("#nextButton").hide(); 
//     console.log("its hiding cuz clicked");
//   });
// });
