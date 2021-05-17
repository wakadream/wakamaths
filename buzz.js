var start = Date.now();
var seconds = 5;
var ms, mspercent, questionsShown, maxQuestions, help1, help2 = 0;
var countInterval = null;

// The help1 and help2 variables should be changed. Both of them are defined in the startQuickMathsWithCorrectInputs() function.

function startQuickMathsWithCorrectInputs() {
    seconds = document.getElementById('answer-time').value
    maxQuestions = document.getElementById('question-amount').value
    help1 = seconds.toString() === "" || seconds == null
    help2 = maxQuestions.toString() === "" || maxQuestions == null
    console.log("run with " + seconds.toString() + " and " + maxQuestions.toString())
    if (help1 && help2) {
        console.log("bad time")
        return false;
    } else {
        seconds = parseInt(document.getElementById('answer-time').value)
        maxQuestions = parseInt(document.getElementById('question-amount').value)
        console.log("good job!")
        startQuickMaths()
    }
}


function startQuickMaths() {
    document.getElementById('menu').style.display = "none"
    document.getElementById('game').style.display = "block"
    start = Date.now()
    countInterval = setInterval(function () {
        var delta = Date.now() - start
        ms = delta / 1000
        // console.log(ms)
        mspercent = ms / seconds * 100
        if (delta / 1000 > seconds - 0.03) {
            start = Date.now()
        } else {
            document.getElementById("timer").style.width = 100 - mspercent.toString() + "%"
        }
    }, 10);
}

