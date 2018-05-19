// get weather data from metaweather.com website

/*
fetch('https://www.metaweather.com/api/location/44418/')
.then(result => console.log(result))
.catch(error => console.log(error))
*/

/* 
the above code will result an error while fetching because of cross-origin javascript policy.
u can't access resource from other servers. for this CORS has to be enabled in the target server. 
But it is disabled for metaweather.com
to solve it, using crossorigin.me proxy, that let us access any of such resource
https://cors-anywhere.herokuapp.com
https://crossorigin.me

*/
const showTemp = (woeid) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`) //returns promise
    .then(result => result.json()) //returns promise 
    .then(data => {  // consume promise
        console.log(`The temperature today in ${data.title} will be between ${data.consolidated_weather[0].min_temp} and ${data.consolidated_weather[0].max_temp} degree Celsius.`)
    })
    .catch(error => console.log(error))
}

showTemp(44418)
showTemp(2487956)