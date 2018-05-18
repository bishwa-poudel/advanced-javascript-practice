// array practice

var a = new Array(1990, 1992, 1994, 1996,2002, 2012)
var b = []
c= []

function calculateAge(year){
    return 2018-year
}

for (var i = 0; i < a.length; i++){
    b[i] = calculateAge(a[i])
}

for (var i = 0; i < a.length; i++){
    if (b[i] >=18) {
        console.log(b[i])
        c[i] = true
    }
    else{
        c[i] = false
    }
}

console.log(c)
