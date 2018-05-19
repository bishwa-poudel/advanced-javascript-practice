/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// My solution:

/*
class Element {
    constructor(name, buildYear){
        this.name = name
        this.buildYear = buildYear
    }

}

let parks = []
let streets = []

class Park extends Element {
    constructor(name, buildYear, noOfTrees, area){
        super(name, buildYear)
        this.noOfTrees = noOfTrees
        this.area = area
        parks.push(this)
    }

    calculateDensity(){
        return this.noOfTrees/this.area
    }

    calculateAge(){
        return new Date().getFullYear() - this.buildYear
    }

}

class Street extends Element {
    constructor(name, buildYear, length, size='normal'){
        super(name, buildYear)
        this.length = length
        this.size = size
        streets.push(this)
    }
}

const calculateAverageAge = function(parks){
    let sum = 0
    parks.forEach(element => {
        sum += element.calculateAge()
    });
    return sum/parks.length
}

const densityReport = function(parks){
    parks.forEach(element => {
        console.log(`${element.name} has a tree density of ${element.calculateDensity()} trees per square km.`)
    });
}

const moreThan1000Trees = function(parks){
    parks.forEach(element => {
        if(element.noOfTrees > 1000){
            console.log(`${element.name} has more than 1000 trees.`)
        }
    });
}

const avgStreetLength = function(streets){
    let sum = 0
    streets.forEach(element => {
        sum += element.length
    })
    return [sum, sum/streets.length]
}

const sizeReport = function(streets){
    streets.forEach(element => {
        console.log(`${element.name}, built in ${element.buildYear}, is a ${element.size} street`)
    })
}

const park1 = new Park('Chitwan Park', 1990, 1023, 12.43)
const park2 = new Park('Pokhara Park', 2000, 885, 10.32)
const park3 = new Park('Kathmandu Park', 1995, 750, 9.4)

const street1 = new Street('MG Galli', 2017, 1.3, 'small')
const street2 = new Street('Niva Street', 2010, 10.2, 'huge')
const street3 = new Street('Ashwin Galli', 2001, 5.3)
const street4 = new Street('Bishwa Galli', 2011, 0.5, 'tiny')

console.log('---------------Parks Report---------------')
console.log(`Our ${parks.length} parks have an average age of ${calculateAverageAge(parks)} years.`)
densityReport(parks)
moreThan1000Trees(parks)

console.log('---------------Streets Report---------------')
const [totalLength, avgLength] = avgStreetLength(streets)
console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km`)
sizeReport(streets)

*/

// Improved solution

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);