var students = [
    {
        name: 'John',
        score1: 47,
        score2: 46,
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24,
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35,
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45,
    },
];

var scores = [91, 81, 71, 61, 51];
var degrees = ['A', 'B', 'C', 'D', 'E'];

function calcSum(src1, src2) {
    var sum = src1 + src2;
    return sum;
}

function calcFinal() {
    for(var i = 0; i < students.length; i++) {
        students[i].sum = calcSum(students[i].score1, students[i].score2);

        if(students[i].sum >= 51) {
            console.log(students[i].name + ' passed the final exam successfully:');

            for(var j = 0; j < scores.length; j++) {
                if (students[i].sum >= scores[j]) {
                    console.log('He has ' + students[i].sum + ' points and he got diploma with degree ' + degrees[j]);
                    console.log('=================');
                    break;
                }
            }

        } else {
            console.log(students[i].name + ' got ' + students[i].sum + ' points has failed and has to try next year');
            console.log('=================');
        }
    }
    
}

calcFinal();