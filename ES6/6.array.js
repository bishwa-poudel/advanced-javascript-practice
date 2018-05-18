// 1. convert list to arrays

// ES5

/*
var boxes = document.querySelectorAll('boxes') // returns list
var boxesArr5 = Array.prototype.slice.call(boxes) //convert to array
*/

// ES6

/*
let boxesArr6 = Array.from(boxes) // convert to array
*/




// 2. looping in array can be done by foreach method but we can't use break and continue inside foreach

// ES5
var a = [1,2,3,4,5,6]

for(var i = 0; i < a.length; i++){
    if(a[i] == 3){
        continue
    }
    a[i] = 'Changed'
}

console.log(a)


// ES6
// can be used to iterate over DOM elements
/*
let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
*/



// 3. find index of required element
// ES5
var ages = [12,7,8,21,14,11]

var full = ages.map(function(cur){
    return cur >= 18
})
console.log(full)

console.log(full.indexOf(true)) // find index of certain element in ES5
console.log(ages[full.indexOf(true)]) // find particular element


// ES6
let y = [12,7,8,21,14,11]

console.log(y.findIndex(cur => cur >= 18))
console.log(y.find(cur => cur >= 18))

// PS: Above function returns only 1st element satisfying that criteria