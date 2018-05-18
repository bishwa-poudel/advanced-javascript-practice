// iife's in ES5 can be replaced with block in ES6 since both are used for data privacy and let and const are only block scoped. These variables cant be accessed from outside

// ES5
(function(){
    var x = 'Hello'
})()
console.log(x) // x is protected inside IIFE

// ES6
{
    let x = 'Hello'
}
console.log(x) // x is protected inside block