// doing same as before using async-await


const showTempAW = async (woeid) => {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    const data = await result.json()
    console.log(`The temperature today in ${data.title} will be between ${data.consolidated_weather[0].min_temp} and ${data.consolidated_weather[0].max_temp} degree Celsius.`)
}

showTempAW(44418)
showTempAW(2487956)
console.log('Hello')