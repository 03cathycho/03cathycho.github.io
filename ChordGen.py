def makeHTML(day,chords,breaks):
    c = [
    [0, 4, 7], # Maj 0
    [0, 3, 8], # inv1
    [0, 5, 9], # inv2
    [0, 3, 7], # Min 3
    [0, 4, 9], # inv1
    [0, 5, 8], # inv2
    [0, 3, 6], # Dim 6
    [0, 3, 9], # inv1
    [0, 6, 9], # inv2
    [0, 4, 8], # Aug 9
    [0,4,7,11], # Maj 7 10
    [0,3,7,8], # inv1
    [0,4,5,9], # inv2
    [0,1,5,8], # inv3
    [0,4,7,10], # D7 14
    [0,3,6,8], # inv1
    [0,3,5,9], # inv2
    [0,2,6,9], # inv3
    [0,3,7,10], # m7 18
    [0,4,7,9], # inv1
    [0,3,5,8], # inv2
    [0,2,5,9], # inv3
    [0,3,6,10], # ø half-dim7 22
    [0,3,7,9], # inv1
    [0,4,6,9], # inv2
    [0,2,5,8], # inv3
    [0,3,6,9], # dim7 26
    ]
    n = ["Major triad", "Major triad, first inversion", "Major triad, second inversion",
         "Minor triad", "Minor triad, first inversion", "Minor triad, second inversion",
         "Diminished triad", "Diminished triad, first inversion", "Diminished triad, second inversion",
         "Augmented triad",
         "Major 7th", "Major 7th, first inversion","Major 7th, second inversion","Major 7th, third inversion",
         "Dominant 7th", "Dominant 7th, first inversion","Dominant 7th, second inversion","Dominant 7th, third inversion", 
         "Minor 7th", "Minor 7th, first inversion","Minor 7th, second inversion","Minor 7th, third inversion",
         "Half-diminished 7th", "Half-diminished 7th, first inversion","Half-diminished 7th, second inversion","Half-diminished 7th, third inversion",
         "Diminished 7th"
         ]
    
    fileName = "chordtrainingday" + str(day) + ".html"
    f = open(fileName,"x")
    f.close()
    f = open(fileName,"w")
    f.write('<!DOCTYPE html>' +
    '<html>' +
    '<body>' +
    '<head>' +
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
    '<title>Chord Training: ')
    f.write("Day " + str(day))

    f.write('</title><h1>Chord Training: ')
    f.write("Day " + str(day))

    f.write('</h1><p>Current score: <text id="insertScore"></text></p><button onclick="playAgain()">Click to hear interval</button><br><br>')

    for i in range(len(chords)):
        f.write('<input class="ansChoice" type="button" onclick="submit(this.id)" id="' + str(i) + '" value="' + n[chords[i]] + '" />')
        if chords[i] in breaks:
            f.write('<br>')

    f.write('<p></p><div id="nextButton"><button onclick="next()">Next</button></div><script src="base.js"></script><script>var scales = [\n')

    for i in range(len(chords)):
        f.write(str(c[chords[i]]))
        if i != len(chords)-1:
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

#     [0, 4, 7], # Maj 0
#     [0, 3, 8], # inv1
#     [0, 5, 9], # inv2
#     [0, 3, 7], # Min 3
#     [0, 4, 9], # inv1
#     [0, 5, 8], # inv2
#     [0, 3, 6], # Dim 6
#     [0, 3, 9], # inv1
#     [0, 6, 9], # inv2
#     [0, 4, 8], # Aug 9
#     [0,4,7,11], # Maj 7 10
#     [0,3,7,8], # inv1
#     [0,4,5,9], # inv2
#     [0,1,5,8], # inv3
#     [0,4,7,10], # D7 14
#     [0,3,6,8], # inv1
#     [0,3,5,9], # inv2
#     [0,2,6,9], # inv3
#     [0,3,7,10], # m7 18
#     [0,4,7,9], # inv1
#     [0,3,5,8], # inv2
#     [0,2,5,9], # inv3
#     [0,3,6,10], # ø half-dim7 22
#     [0,3,7,9], # inv1
#     [0,4,6,9], # inv2
#     [0,2,5,8], # inv3
#     [0,3,6,9], # dim7 26
makeHTML(1,[0,3],[])
makeHTML(2,[6,9],[])
makeHTML(3,[0,1,2,3,4,5],[2])
makeHTML(4,[0,3,6,9],[])
makeHTML(5,[0,1,2,3,4,5,6,7,8,9],[2,5,8])
makeHTML(7,[10,14,18],[])
makeHTML(8,[22,26],[])
makeHTML(9,[10,14,18,22,26],[])
makeHTML(10,[0,1,2,3,4,5,6,7,8,9],[2,5,8])
makeHTML(11,[10,11,14,15,18,19,22,23],[11,15,19])
makeHTML(13,[10,11,12,14,15,16,18,19,20,22,23,24],[12,16,20])
makeHTML(14,[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],[13,17,21])
makeHTML(15,[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],[13,17,21,25])
makeHTML(16,[0,3,10,14,18],[3])
makeHTML(17,[0,1,2,3,4,5,10,11,12,13,14,15,16,17,18,19,20,21],[2,5,13,17])
makeHTML(19,[6,22,26],[])
makeHTML(20,[6,7,8,22,23,24,25,26],[8,25])
makeHTML(21,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],[2,5,8,9,13,17,21,25])
  