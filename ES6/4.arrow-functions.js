const years = [1990, 1997, 1965, 1978]

// ES5
var ages5 = years.map(function(el){
    return 2018-el
})
console.log(ages5)

// ES6
// using arrow function with single line and parameter
let ages6 = years.map(el => 2018-el)
console.log(ages6)

// using arrow function with single line and two parameter
ages6 = years.map((el, index) => `Person ${index + 1} is ${2018-el} years old.`)
console.log(ages6)

// using arrow function with multiple lines and parameters
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear()
    let age = now - el
    return `Person ${index + 1} is ${age} years old.`
})
console.log(ages6)



// arrow function doesn't have its own this operator. It shares lexical this from its surrounding

// ES5
var Person = function(name){
    this.name = name
}

Person.prototype.friends5 = function(friends){
    // inside here, this keyword points to Person object
    var arr = friends.map(function(el){
        // this is inside regular function call, not inside the method of object. Hence, this keyword points to global window object.
        return this.name + ' is friend with ' + el + '.'
    })
    console.log(arr)
}

new Person('bishwa').friends5(['ram', 'shyam', 'hari']) // doesn't works so

// another way to make that work is to assign this to another variable inside method of object
Person.prototype.friendsNew5 = function(friends){
    // inside here, this keyword points to Person object
    var self = this
    var arr = friends.map(function(el){
        // this is inside regular function call, not inside the method of object. Hence, this keyword points to global window object.
        return self.name + ' is friend with ' + el + '.'
    })
    console.log(arr)
}

new Person('bishwa').friendsNew5(['ram', 'shyam', 'hari']) // this works

// another way to make that work is to bind the value of this to function
Person.prototype.friendsImproved5 = function(friends){
    // inside here, this keyword points to Person object

    var arr = friends.map(function(el){
        // this is inside regular function call, not inside the method of object. Hence, this keyword points to global window object.
        return this.name + ' is friend with ' + el + '.'
    }.bind(this)) //this is accessible since this area is inside method.
    console.log(arr)
}

new Person('bishwa').friendsImproved5(['ram', 'shyam', 'hari']) // this too works





// ES6
// doing same

const PersonDetail = function(name){
    this.name = name
}

PersonDetail.prototype.friends6 = function(friends){
    // inside here, this keyword points to Person object
    var arr = friends.map((el) => `${this.name} is friend with ${el}.`) // here, this is arrow function.so this keyword gets its value from its surrounding which is inside method of object.

    console.log(arr)
}

new PersonDetail('ashwin').friends6(['ram', 'bishwa', 'shyam'])