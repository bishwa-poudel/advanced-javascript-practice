// ES5
function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments) // convert list to array
    argsArr.forEach(function(current){
        var now = new Date().getFullYear()
        console.log(now-current >= 18)
    });
}

isFullAge5(1995, 2003, 1965, 2012)
console.log('break')

// ES6
function isFullAge6(...years){
    years.forEach(cur => {
        var now = new Date().getFullYear()
        console.log(now-cur >= 18)
    })
}

isFullAge6(1995, 2003, 1965, 2012)


// ES5 (set age limit by oneself while calling function)
function isFullAgeImprove5(limit){
    var argsArr = Array.prototype.slice.call(arguments, 1) // convert list to array
    argsArr.forEach(function(current){
        var now = new Date().getFullYear()
        console.log(now-current >= limit)
    });
}

isFullAgeImprove5(25, 1995, 2003, 1965, 2012)
console.log('break')

// ES6
function isFullAgeImprove6(limit, ...years){
    years.forEach(cur => {
        var now = new Date().getFullYear()
        console.log(now-cur >= limit)
    })
}

isFullAgeImprove6(25, 1995, 2003, 1965, 2012)