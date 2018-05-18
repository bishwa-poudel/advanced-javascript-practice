function sumOf4(a,b,c,d){
    return a+b+c+d
}

// ES5
sum1 = sumOf4(1,2,3,4)
console.log(sum1)

var element = [1,2,3,4]
var sum2 = sumOf4.apply(null, element)
console.log(sum2)

// ES6
const element6 = [1,2,3,4]
let sum3 = sumOf4(...element6) // spread array to the form of a,b,c,d
console.log(sum3)

// mixing of two arrays
const familySmith = ['John', 'Jonas', 'Jerry', 'Jane']
const familyMiller = ['Mark', 'Mike', 'Mary', 'Minanda']

const bigFamily = [...familySmith, 'Lily', ...familyMiller]
console.log(bigFamily)