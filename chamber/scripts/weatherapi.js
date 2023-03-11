// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
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


























//----Teacher code example----

// const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
//     const response = await fetch(apiURL);
//     if (response.ok) {
//         const data = await response.json();
//         console.log(data);
        
//         document.querySelector('#current-temp').textContent = data.main.temp.toFixed(1);
        
//         let wDesc = data.weather[0].description;
        
//         wDesc = wDesc.split(' ').map(capitalize).join(' ');
//         document.querySelector('#currently').textContent = wDesc;
        
//         document.getElementById('weatherIcon').setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
//         document.getElementById('weatherIcon').setAttribute('alt', wDesc);
//         document.querySelector('figcaption').textContent = `${wDesc}`;
        
//         const w_events = data.weather;
//         console.log(w_events);
//     }
// }

// function capitalize(s) {
//     return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
// }

// window.addEventListener('load', apiFetch);

// apiFetch();