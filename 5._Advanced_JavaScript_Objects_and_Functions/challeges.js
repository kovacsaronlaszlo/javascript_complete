/* coding challenge */
// for security
(function() {
    // fn contructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

// to create the question and answers in console (use prototype)
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    };

// check it if we use the correct answer
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer');
        } else {
            console.log('Wrong Answer');
        }
    };

// create questions
    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question("What is the name of this course\'s teacher?", ['John', 'Mike', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

// put questions to an array
    var questions = [q1,q2,q3];

// make that if, when only 3 question com whit random line, but not more than 3
    var n = Math.floor(Math.random() * questions.length);

// call question nd their answers
    questions[n].displayQuestion();

// call popup window
    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();



