var start = Date.now();
var seconds = 5;
var ms, mspercent, questionsShown = 0;




function startQuickMaths() {
    document.getElementById('progress-element').style.visibility = "visible"
    start = Date.now();
    var countInterval = setInterval(function () {
        var delta = Date.now() - start;
        ms = delta / 1000
        // console.log(ms)
        mspercent = ms / seconds * 100
        if (delta / 1000 > seconds - 0.03) {
            start = Date.now();
        } else {
            document.getElementById("timer").style.width = 100 - mspercent.toString() + "%";
        }
    }, 10);
}

