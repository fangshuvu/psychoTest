const allQuestion = Array.from(document.querySelectorAll('.question'));
const progress = document.getElementById('run');
const ld = document.getElementById('LD');
const allAnswer = [ Answer1, Answer2, Answer3, Answer4 ];

// next question
function transitionQ(e, currQ, nextQ, percent){
    if (e.target.nodeName !== "INPUT") return;
    
    currQ.classList.remove('question-in');
    currQ.classList.add('question-out');
    nextQ.classList.remove('none');
    nextQ.classList.add('question-in');
    progress.classList.remove(`w-${percent}`);
    progress.classList.add(`w-${percent+25}`);
}

// begin
function begin(){
    document.getElementById('start').classList.add('none');
    allQuestion[0].classList.remove('none');
    allQuestion[0].classList.add('question-in');
}

// loading
function loading(e){
    if (e.target.nodeName !== "INPUT") return;

    ld.classList.remove('none');
    setTimeout( function(){
        ld.classList.add('fade-out');
    }, 3000);
}

function animateSequence(){
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

// end:計算結果
function result(){
    
    allQuestion[4].classList.remove('question-in');
    allQuestion[4].classList.add('question-out');
    progress.classList.remove('w-100');

    setTimeout( function(){
        var total = 0;
        var item = [];
        
        var question = document.querySelectorAll('input');
        // console.log(question);
        for(var i = 0; i < question.length; i++) {
            if(question[i].checked) {
                temp = parseInt(question[i].value);
                item.push(temp);
            }
        }
        
        total = item.reduce(( a, b ) => a + b);
        if ( total < 9) {
            document.getElementById('result1').classList.remove('result-none');
        }
        
        else if (total >= 10 && total <= 12) {
            document.getElementById('result2').classList.remove('result-none');
        }
        
        else {    
            document.getElementById('result3').classList.remove('result-none');
        }
    }, 1000)
}


window.onload = function() { animateSequence(); };

btnStart.addEventListener('click', begin);

allAnswer.forEach( (ans, crrq) => {
    ans.addEventListener('click', function(e){
        let nextq = crrq + 1 ;
        let p = crrq * 25;
        transitionQ(e, allQuestion[crrq], allQuestion[nextq], p);
    })
})

Answer5.addEventListener('click', loading);
Answer5.addEventListener('click', () => { setTimeout(result, 2500) });