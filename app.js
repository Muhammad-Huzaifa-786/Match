var score = 0
var ball = 0
var over = 0
var wicke = 0

var onoo = document.getElementById('score')

function re() {
    
score = 0
ball = 0
over = 0
wicke = 0

    var two = document.getElementById('ball')
    var wi = document.getElementById('wicket')
    var ove = document.getElementById('over')
    var on = document.getElementById('score')
    two.innerHTML = '0'
    wi.innerHTML = '0'
    ove.innerHTML = '0'
    on.innerHTML = '0'

}

function wicket2() {
    var wi = document.getElementById('wicket')
    wicke++
    wi.innerHTML = wicke


    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }
    var one = document.getElementById('score')
    score = score + 2
    one.innerHTML = score
}


function wicket1() {
    var wi = document.getElementById('wicket')
    wicke++
    wi.innerHTML = wicke


    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }
    var one = document.getElementById('score')
    score++
    one.innerHTML = score
}


function wicket() {
    var wi = document.getElementById('wicket')
    wicke++
    wi.innerHTML = wicke

    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }

}

function noball() {
    var one = document.getElementById('score')
    score++
    one.innerHTML = score

}

function no1() {
    var one = document.getElementById('score')
    score = score + 2
    one.innerHTML = score

}

function no4() {
    var one = document.getElementById('score')
    score = score + 5
    one.innerHTML = score

}

function no6() {
    var one = document.getElementById('score')
    score = score + 7
    one.innerHTML = score

}

function wide() {
    var one = document.getElementById('score')
    score++
    one.innerHTML = score




}
function oneplus() {
    var one = document.getElementById('score')
    score++
    one.innerHTML = score
    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }



}
function twoplus() {
    var one = document.getElementById('score')
    score = score + 2
    one.innerHTML = score
    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }

}
function threeplus() {
    var one = document.getElementById('score')
    score = score + 3
    one.innerHTML = score
    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }

}

function fourplus() {
    var one = document.getElementById('score')
    score = score + 4
    one.innerHTML = score
    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }

}
function sixplus() {
    var one = document.getElementById('score')
    score = score + 6
    one.innerHTML = score
    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }

}
function dot() {

    var two = document.getElementById('ball')
    ball++
    two.innerHTML = ball
    if (ball == 6) {
        var ove = document.getElementById('over')
        over++
        ove.innerHTML = over
        ball = 0
    }
}

function wide1() {
    var one = document.getElementById('score')
    score = score + 2
    one.innerHTML = score
}




function wide2() {
    var one = document.getElementById('score')
    score = score + 3
    one.innerHTML = score
}


function wide4() {
    var one = document.getElementById('score')
    score = score + 5
    one.innerHTML = score
    scorecard = 5
}
var scorenum = document.getElementById('score')
var scorecard = document.getElementById('card')

function next() {
    window.location.href = 'next.html'
    sessionStorage.setItem('score',onoo.innerHTML)
} function nexts() {
    window.location.href = 'index.html'
}



function updateProgress() {

    var progressBar = document.getElementById('progressBar');
    var width = document.getElementById('score')
    var local = sessionStorage.getItem('score')
   var cal =  width.innerHTML*100/(local)
   var st = cal.toFixed(2)

//     // var calcula = scre
//     //  / 100 * width.innerHTML
//     //     var abcde = document.getElementById('score')
//     //     var sc = abcde
//     //     if (width >= abcde.value) {
//     //     clearInterval(progressInterval);
//     //   } else {
//     //     width++;
    progressBar.style.width = st  + '%';
    progressBar.innerHTML = st + '% ';
      }
// }

var progressInterval = setInterval(updateProgress, 1);






















// function cur() {
//     var totalover = document.getElementById('totalover').value
//     var target = document.getElementById('target').value
//     var over = document.getElementById('over').value
//     var ball = document.getElementById('ball').value
//     var run = document.getElementById('run').value
//     var current = ball * 0.167

//         document.write(`<center>
// <table border = '3px' style="font-size: 40px;border:2px solid black">
//     <tr>
//         <th>Target</th>
//         <td><center>${target}</center></td>
//         </tr>

//         <tr>
//             <th>Total Overs </th>
//             <td><center>${totalover}</center></td>
//         </tr>

//     <tr>
//         <th>Over</th>
//         <td> <center>${over}.${ball}</center></td>
//     </tr>

//     <tr>
//         <th>Runs </th>
//         <td> <center>${run}</center></td>
//     </tr>

//     <tr>
//         <th>Remaining Runs </th>
//         <td> <center>${target - run}</center></td>
//     </tr>

//     <tr>
//         <th>Current</th>
//         <td> <center>${((run / (over +  current))).toFixed(2)}</center></td>
//     </tr>
//     <tr>
//         <th>Required</th>
//         <td> <center>${((target - run) / ((totalover - over) - (ball / 6))).toFixed(2)}</center></td>
//     </tr>
//     <tr>
//         <th>Ball are Left</th>
//         <td> <center>${((totalover - over) * 6) - (ball)}</center></td>
//     </tr>
//     <tr>
//         <th>Ball are played</th>
//         <td> <center>${(totalover * 6) - (((totalover - over) * 6) - (ball))}</center></td>
//     </tr>


// </table></center>
// `)
// }