fileName = ["chordtrainingday1.html",
"chordtrainingday2.html",
"chordtrainingday3.html",
"chordtrainingday4.html",
"chordtrainingday5.html",
"chordtrainingday7.html",
"chordtrainingday8.html",
"chordtrainingday9.html",
"chordtrainingday10.html",
"chordtrainingday11.html",
"chordtrainingday13.html",
"chordtrainingday14.html",
"chordtrainingday15.html",
"chordtrainingday16.html",
"chordtrainingday17.html",
"chordtrainingday19.html",
"chordtrainingday20.html",
"chordtrainingday21.html",
"harmonicinterval6ab.html",
"harmonicinterval12.html",
"harmonicinterval34.html",
"harmonicinterval57c.html",
"harmonicinterval89.html",
"harmonicinterval1257c.html",
"harmonicinterval3489.html",
"harmonicinterval12567abc.html",
"melodicinterval6ab.html",
"melodicinterval12.html",
"melodicinterval34.html",
"melodicinterval57c.html",
"melodicinterval89.html",
"melodicinterval1257c.html",
"melodicinterval3489.html",
"melodicinterval12567abc.html",
"intervalsquiz.html",
"harmonicintervaltraining.html",
"melodicintervaltraining.html",
"modalscaletraining.html",
"modalscaletrainingup.html",
"modalscaletrainingdown.html",
"scaletraining.html",
"sevenchordtraining.html",
"sevenchordtraininginversions.html",
"triadchordtraining.html",
"triadchordtraininginversions.html"
]

def replaceSubmit(fileName):
    d = open(fileName)
    s = d.read()
    d.close()
    s = s.replace("var score = 0;", "var score = 0;var total = 0;var firstTime = true;")
    s = s.replace("score++;", '$("#nextButton").show();if (firstTime == true) {score++;total++;}firstTime = true;'+
                  '$("#insertScore").html(score + "/" + total + ", Percent correct: " + Math.round(100.0 * score / total) + "%");')
    s = s.replace('$("#insertScore").html(score);',"")
    s = s.replace("$(\"body\").find('#' + clicked_id).prop('disabled', true);",
                 "$(\"body\").find('#' + clicked_id).prop('disabled', true);" +
      'if (firstTime == true) {total++;firstTime = false;}' +
      '$("#insertScore").html(score + "/" + total + ", Percent correct: " + Math.round(100.0 * score / total) + "%");')
    d = open(fileName,"w")
    d.write(s)
    d.close()

for fileN in fileName:
  replaceSubmit(fileN)