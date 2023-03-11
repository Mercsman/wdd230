const na = "N/A";

const calWindChill = (temperature, speed) => {
    if (temperature <= 50 && speed > 3) 
    {
        const calculation = Math.round(
            35.74 
            + 0.6215 
            * temperature 
            - 35.75 
            * Math.pow(speed, 0.16) 
            + 0.4275 
            * temperature 
            * Math.pow(speed, 0.16) )
        document.getElementById("chillWind").innerHTML = calculation;
        } 
        else {
            const calculation = na
            document.getElementById("chillWind").innerHTML = calculation;
        };
        
}

const displayWindChill = () => {
    let temperature = Number(document.getElementById("temperature").textContent);
    let wind = Number(document.getElementById("wind").textContent);
    let result = calWindChill(temperature, wind);
    
}

displayWindChill();

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.9&lon=-117.4&units=imperial&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
    try{
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}