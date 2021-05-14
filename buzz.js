var start = Date.now();
var seconds = 5;
var ms, mspercent, questionsShown = 0;
var countInterval = null;



function startQuickMathsWithCorrectInputs() {
    console.log(document.getElementById('answer-time').value)
    seconds = parseInt(document.getElementById('answer-time').value)
    if (document.getElementById('answer-time').value) {
        return false;
    } else {
        seconds = parseInt(document.getElementById('answer-time').value)
    }

    if (document.getElementById('question-amount').value) {
        return false
    } else {
        seconds = parseInt(document.getElementById('answer-time').value)
    }
    startQuickMaths()
}


function startQuickMaths() {
    document.getElementById('menu').style.display = "none"
    document.getElementById('game').style.display = "block"
    start = Date.now();
    countInterval = setInterval(function () {
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

