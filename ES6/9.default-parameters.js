// ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName
    nationality === undefined ? nationality = 'american' : nationality = nationality

    this.firstName = firstName
    this.lastName = lastName
    this.yearOfBirth = yearOfBirth
    this.nationality = nationality
}

var john = new SmithPerson5('John', 1990)
var emily = new SmithPerson5('Emily', 1983, 'Diaz', 'spanish')

//ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName
    this.lastName = lastName
    this.yearOfBirth = yearOfBirth
    this.nationality = nationality
}


var john = new SmithPerson6('John', 1990)
var emily = new SmithPerson6('Emily', 1983, 'Diaz', 'spanish')