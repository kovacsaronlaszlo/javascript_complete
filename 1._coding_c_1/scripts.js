// var scoreOfJohn = 80;
var scoreOfJohn = 49;
var scoreOfNick = 45;
// var scoreOfNick = 75;
var pass = 51;

if (scoreOfJohn >= pass && scoreOfNick >= pass) {
    console.log('Both student passed');
} else if(scoreOfJohn >= pass || scoreOfNick >= pass) {
    console.log('One of the student passed');
    if (scoreOfJohn > scoreOfNick) {
        console.log('and it is John with ' + scoreOfJohn + ' points');
    } else {
        console.log('and it is Nick with ' + scoreOfNick + ' points');
    }
} else {
    console.log('Both of the student failed');
}