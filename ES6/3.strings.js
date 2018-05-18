// ES5
var firstName = 'Nabeen'
var lastName = 'KC'
var yearOfBirth = 1995

console.log('He is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '.')

// ES6
// template string literals are introduced.

let firstName6 = 'Nabeen'
let lastName6 = 'KC'
const yearOfBirth6 = 1995

console.log(`He is ${firstName} ${lastName}. He was born in ${yearOfBirth}.`) //Notice backticks ``

// More string function in ES6
let word = 'John Smith'
console.log(word.startsWith('J')) // boolean value
console.log(word.endsWith('ith')) // boolean value
console.log(word.includes('ohn')) // boolean value

