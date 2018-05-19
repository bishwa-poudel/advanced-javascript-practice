// doing same as before using async-await

// every data returned by async function is a promise. So, use then to handle the data
const showTempAW = async (woeid) => {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        const data = await result.json()
        console.log(`The temperature today in ${data.title} will be between ${data.consolidated_weather[0].min_temp} and ${data.consolidated_weather[0].max_temp} degree Celsius.`)

        return data
    }
    catch(error){
        console.log('Oops!! An error occured. Try again later !!')
    }
}

showTempAW(44418)
showTempAW(2487956).then(data => {
    const dataWeather = data
    console.log('Data successfully stored.')
})
