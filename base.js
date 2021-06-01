var previous = 0;

window.onload = function () {
  
  $("#nav-placeholder").load("/navigation.html");
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
