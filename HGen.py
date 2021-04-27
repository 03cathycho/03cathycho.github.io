arr = [1, 2]
nameRef = ['U','m2','M2','m3','M3','P4','TT','P5','m6','M6','m7','M7','P8']
arrNames = []
for i in arr:
    arrNames.append(nameRef[i])

fileName = "harmonicinterval12.html"
f = open(fileName,"x")
f.close()
f = open(fileName,"w")
f.write('<!DOCTYPE html>' +
'<html>' +
'<body>' +
'<head><link rel="shortcut icon" type="image/x-icon" href="favicon.png">' +
'  <link rel="stylesheet" href="styles.css">' +
'  <meta http-equiv="content-type" content="text/html; charset=utf-8" />' +
'  <!-- polyfill -->' +
'  <script src="/inc/shim/Base64.js" type="text/javascript"></script>' +
'  <script src="/inc/shim/Base64binary.js" type="text/javascript"></script>' +
'  <script src="/inc/shim/WebAudioAPI.js" type="text/javascript"></script>' +
'  <!-- midi.js package -->' +
'  <script src="/js/midi/audioDetect.js" type="text/javascript"></script>' +
'  <script src="/js/midi/gm.js" type="text/javascript"></script>' +
'  <script src="/js/midi/loader.js" type="text/javascript"></script>' +
'  <script src="/js/midi/plugin.audiotag.js" type="text/javascript"></script>' +
'  <script src="/js/midi/plugin.webaudio.js" type="text/javascript"></script>' +
'  <script src="/js/midi/plugin.webmidi.js" type="text/javascript"></script>' +
'  <!-- utils -->' +
'  <script src="/js/util/dom_request_xhr.js" type="text/javascript"></script>' +
'  <script src="/js/util/dom_request_script.js" type="text/javascript"></script>' +
'  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>' +
'</head>' +
'<title>Harmonic Interval Training: ')


for i in range(len(arrNames)):
    if i != len(arrNames)-1:
        f.write(arrNames[i] + ', ')
    else:
        f.write(arrNames[i])

f.write('</title><h1>Harmonic Interval Training: ')

for i in range(len(arrNames)):
    if i != len(arrNames)-1:
        f.write(arrNames[i] + ', ')
    else:
        f.write(arrNames[i])

f.write('</h1><p>Current score: <text id="insertScore"></text></p><button onclick="playAgain()">Click to hear interval</button><br><br>')

for i in range(len(arrNames)):
    f.write('<input class="ansChoice" type="button" onclick="submit(this.id)" id="' + str(i) + '" value="' + arrNames[i] + '" />')

f.write('<p></p><div id="nextButton"><button onclick="next()">Next</button></div><script src="base.js"></script><script>var scales = [\n')

for i in range(len(arr)):
    f.write('[0,' + str(arr[i]) + ']')
    if i != len(arr)-1:
        f.write(', \n')

f.write('];var scale = [0, 0]; var startRange = 57; var endRange = 69; '+
'var noteBass = getRndInteger(startRange, endRange + 1); '+
'var answer = getRndInteger(0, scales.length);'+
  'var delay = 0.05; var velocity = 90; var score = 0;var playDuration = 0.75;function submit(clicked_id) {'+
'if (clicked_id == answer) {   $("#nextButton").show();' +
      'score++;$("#insertScore").html(score);$("body").find(\'#\' + clicked_id).addClass("rightButton");' +
      '$(".ansChoice").prop(\'disabled\', true);' +
      '} else {$("#nextButton").hide(); $("body").find(\'#\' + clicked_id).addClass("wrongButton");' +
'$("body").find(\'#\' + clicked_id).prop(\'disabled\', true);}}function next() {' +
    '$("#nextButton").hide();noteBass = getRndInteger(startRange, endRange + 1); answer = getRndInteger(0, scales.length);' +
    'setTimeout(function() {playAgain() }, 1000); $(".ansChoice").removeClass("wrongButton");'+
'$(".ansChoice").removeClass("rightButton"); $(".ansChoice").prop(\'disabled\', false); }' +
'function playAgain() {' +
    'scale = scales[answer].slice();' +
    'for (var i = 0; i < scale.length; i++) {' +
    '  scale[i] += noteBass;' +
    '}' +
    'MIDI.chordOn(0, scale, velocity, delay);' +
    'MIDI.chordOff(0, scale, delay + 1.5);' +
  '}'+
'</script></body></html>')
f.close()
