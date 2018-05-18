// Inheritance

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = function() {
    return new Date().getFullYear() - this.yearOfBirth
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype) // link two class prototypes

Athlete5.prototype.wonMedal = function(){
    this.medals++
    console.log(this.medals)
}

var John5 = new Athlete5('john', 1990, 'teacher', 14, 8)
console.log(John5)
console.log(John5.calculateAge())
John5.wonMedal()

console.log('now lets see in ES6')
console.log('--------------------------')
// ES6
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
    }

    calculateAge() {
        return new Date().getFullYear() - this.yearOfBirth
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job)
        this.olympicGames = olympicGames
        this.medals = medals
    }

    wonMedal(){
        this.medals++
        console.log(this.medals)
    }
}

let john6 = new Athlete6('John', 1990, 'teacher', 14, 8)
console.log(john6)
console.log(john6.calculateAge())
john6.wonMedal()
