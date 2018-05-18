//  ES5
var person5 = ['John', 1990]
firstName5 = person5[0]
yearOfBirth5 = person5[1]

console.log(firstName5)
console.log(yearOfBirth5)


// ES6
const person6 = ['John', 1990]
const [name6, yearOfBirth6] = person6 // destructuring array

console.log(name6)
console.log(yearOfBirth6)

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName,lastName} = obj // destructuring object
console.log(firstName)
console.log(lastName)

// can also be used to return multiple values from function. Previously, used to use objects

function getValue(){
    const age = 6
    const x = 5
    return [age, x]
}

const [a,b] = getValue()
console.log(a)
console.log(b)