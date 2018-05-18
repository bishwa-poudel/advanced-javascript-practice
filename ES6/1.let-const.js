// 1. mutable and immutable

// ES5
var name5 = 'John Smith'
console.log(name5)

var name5 = 'John Miller'
console.log(name5) // name5 is changed to John Miller

// ES6
let name6 = 'John Smith'
const yearOfBirth = 1990

name6 = 'John Miller'
yearOfBirth = 1995 // cannot mutate const variable.. but can mutate let variable





// 2. var is function scoped - let, const are block scoped

// ES5
function driverTest(passed){
    if(passed){
        var personName = 'John Smith'
    }

    console.log(personName + 'is capable of driving')
}

driverTest(true)
// personName scope is inside function driverTest() hence can be accessed from anywhere inside the function

// ES6
function driverTest(passed){
    if(passed){
        let personName = 'John Smith'
    }

    console.log(personName + 'is capable of driving')
}

driverTest(true)
// error occurs because let is block scoped. So, personName has scope only inside if statement. a block means inside {}.





