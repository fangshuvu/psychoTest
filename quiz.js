// console.log(document.getElementsByName('A'+ 4).length)

function begin() {
    document.getElementById('start').classList.add('none');
    document.getElementById('Q1').classList.remove('none');
    document.getElementById('Q1').classList.add('question-in');
}

function quiz1() {
    document.getElementById('Q1').classList.remove('question-in');
    document.getElementById('Q1').classList.add('question-out');
    document.getElementById('Q2').classList.remove('none');
    document.getElementById('Q2').classList.add('question-in');
    document.getElementById('run').classList.add('w-25');
}

function quiz2() {
    document.getElementById('Q2').classList.remove('question-in');
    document.getElementById('Q2').classList.add('question-out');
    document.getElementById('Q3').classList.remove('none');
    document.getElementById('Q3').classList.add('question-in');
    document.getElementById('run').classList.remove('w-25');
    document.getElementById('run').classList.add('w-50');
}

function quiz3() {
    document.getElementById('Q3').classList.remove('question-in');
    document.getElementById('Q3').classList.add('question-out');
    document.getElementById('Q4').classList.remove('none');
    document.getElementById('Q4').classList.add('question-in');
    document.getElementById('run').classList.remove('w-50');
    document.getElementById('run').classList.add('w-75');
}

function quiz4() {
    document.getElementById('Q4').classList.remove('question-in');
    document.getElementById('Q4').classList.add('question-out');
    document.getElementById('Q5').classList.remove('none');
    document.getElementById('Q5').classList.add('question-in');
    document.getElementById('run').classList.remove('w-75');
    document.getElementById('run').classList.add('w-100');
}

function result() {
    document.getElementById('Q5').classList.remove('question-in');
    document.getElementById('Q5').classList.add('question-out');
    document.getElementById('run').classList.remove('w-100');

    var total = 0;
    var temp = '';
    var item = [];
    
    var question = document.getElementsByClassName('question');
    console.log(question);
    for(var i = 0; i < question.length; i++) {
        
        var answer = document.getElementsByName('A' + (i+1));
        // console.log(answer.constructor.name);
        // console.log(answer.item(0));
        for(var j = 0; j < answer.length; j++) {
            
            if(answer[j].checked) {
                temp = answer[j].value;
                item.push(temp);
                console.log(item);
                
                total += parseInt(temp);
            }
        }
        console.log(total);
    }
    
    if ( total <= 8) {
        document.getElementById('result1').classList.remove('result-none');
    }
    // else if (total == 9) {    
    //     document.getElementById('result2').classList.remove('result-none');
    // }
    else if ( total >= 9 && total < 12) {
        document.getElementById('result2').classList.remove('result-none');
    }
    else {    
        document.getElementById('result3').classList.remove('result-none');
    }
}

btnStart.addEventListener('click', begin);
Answer1.addEventListener('click', quiz1);
Answer2.addEventListener('click', quiz2);
Answer3.addEventListener('click', quiz3);
Answer4.addEventListener('click', quiz4);
Answer5.addEventListener('click', result);