window.onload = function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
  });
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function getRndIntegerArray(int[] array) {
//   return Math.floor(Math.random() * (max - min)) + min;
// } -> for the more specified ones, e.g. choosing between [P4, P5, P8] (get length, random int from there and return the element)

$(document).ready(function(){
  $("#nextButton").hide();
  $("#nextButton").click(function(){
    $("#nextButton").hide(); 
  });
});
