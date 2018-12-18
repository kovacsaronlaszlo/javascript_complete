// function constructor

// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher',
// };
//
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
//
// Person.prototype.calculateAge = function () {
//     console.log(2018 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
//
// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('jane', 1988, 'designer');
// var mark = new Person('mark', 1948, 'retired');
//
// mark.calculateAge();
// console.log(john.lastName);
// console.log(jane.lastName);

/*=========================================================*/
// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2018 - this.yearOfBirth);
//     }
// }
//
// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto, {
//     name: { value: 'jane' },
//     yearOfBirth: { value: 1993 },
//     job: { value: 'designer' },
// });

/*=============================================================*/
// Primitives vs objects

// primitves
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
// // object
// var obj1 = {
//     name: 'john',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1);
// console.log(obj2);
//
// // functions
// var age = 27;
// var obj = {
//     name:'john',
//     city: 'london'
// };
// function change(a,b) {
//     a = 30;
//     b.city = 'new york';
// }
// change(age, obj);
// console.log(age);
// console.log(obj.city);

/*============================================================*/
// lecture: passing function as arguments
// var years = [1990,1993,1988,1935,2008];
//
// // general function
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i  = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2018 - el;
// }
//
// function isFullAge(el) {
//     return el >= 18;
// }
//
// function maxHeartRate(el) {
//     if (el >= 18 && el <= 90) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var reats = arrayCalc(ages, maxHeartRate);
// console.log(reats);
// console.log(fullAges);
// console.log(ages);

/*==============================================================*/
// lecture: functions returning functions
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job) {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('John');
// designerQuestion('Jane');
//
// interviewQuestion('teacher')('Mark');

/*======================================================================*/
// lecture: IIFE - good for data privacy
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// // ez az IIFE
// (function() {
//         var score = Math.random() * 10;
//         console.log(score >= 5);
// })();
//
// // console.log(score);
//
// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

/*======================================================================*/
// lecture: closures
// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// var retirementUs = retirement(66);
// var retirementGer = retirement(65);
// var retirementIceLand = retirement(67);
// retirementUs(1990);
// retirementGer(1990);
// retirementIceLand(1990);
//
// // retirement(66)(1993);
//
// // interviewQuestion function in closure
// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if(job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// interviewQuestion('teacher')('John');
// interviewQuestion('designer')('Jane');
// interviewQuestion()('Mark');

/*======================================================================*/
// lecture: bind, call and apply methods

// var john = {
//     name: 'john',
//     age: 25,
//     job: 'developer',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\"m ' + this.name + ' and I\"m ' + this.job + ' and I\"m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What"\s up? I\"m ' + this.name + ' and I\"m ' + this.job + ' and I\"m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// };
//
// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer',
// };
//
// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'night');
//
// // john.presentation.apply(emily, ['friendly', 'night']);
//
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');
//
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


// var years = [1990,1993,1988,1935,2008];
//
// // general function
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i  = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2018 - el;
// }
//
// function isFullAge(limit, el) {
//     return el >= limit;
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);
