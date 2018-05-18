// function constructor to create object

/*
var Person = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    // this.calculateAge = function(){
    //     console.log(2018-this.yearOfBirth)
    // }
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
}

// all object will have calculate age method in them. More efficient will be to use in prototype property

var john = new Person('John', 1990, 'Teacher')
john.calculateAge()
*/







// object.create method to create object
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth)
    }
}

var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
})
*/







// passing functions as arguments

/*
var years = [1990, 1991, 1995, 1969, 2014]

function arrayCalc(arr, fn) {
    var arrRes = []
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }

    return arrRes
}

function calculateAge(e) {
    return 2018 - e
}

function isFullAge(el) {
    return el >= 18
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el))
    }
    else{
        return -1
    }
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages)
console.log(fullAges)
console.log(rates)

*/






// function returning funtions

/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')

teacherQuestion('John')
designerQuestion('Mike')
designerQuestion('Bishwa')
teacherQuestion('Mark')

// can be called in another way
interviewQuestion('teacher')('Dhoni')

*/








// Immediately Invoked Funtion Expression


// suppose this is a simple game. you want to hide the score, one common way is to define score variable inside a function such that it isn't accessible from outside the function
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5)
}

game()
*/

// but IIFE can be used for better data privacy

/*
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5)
})();

console.log(score) // will return false

*/







// Closures

/*
// variables value of outer functions are kept alive by inner function. Like in following, the value of job is preserved in the inner function
function interviewQuestion(job){
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher'){       
            console.log('What subject do you teach, ' + name + '?')
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

interviewQuestion('teacher')('John')


*/







// bind, call and apply
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentleman. I am ' + this.name + '. I am ' + this.age + ' years old and I am a ' + this.job + '. Thank You.')
        }

        if(style === 'friendly'){
            console.log('Hey, what\'s up. Its me ' + this.name + ' aged ' + this.age + ' years. I am a ' + this.job + '. Have a good ' + timeOfDay + ' everyone.' )
        }
    }
}

// normal call to a function
john.presentation('formal', 'morning')

var emily = {
    name: 'emily',
    age: '35',
    job: 'designer'
}

// if emily want to use presentation function of john
john.presentation.call(emily, 'friendly', 'afternoon')

// to set some variable only in a function
johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('afternoon')



















