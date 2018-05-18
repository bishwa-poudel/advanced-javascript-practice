// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = function() {
    return new Date().getFullYear() - this.yearOfBirth
}

john5 = new Person5('John Williamson', 1990, 'Engineer')
console.log(john5.calculateAge())

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

john6 = new Person6('John Williamson', 1990, 'Engineer')
console.log(john6.calculateAge())
