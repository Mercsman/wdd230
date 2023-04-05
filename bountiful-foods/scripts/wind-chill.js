// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const humidity = document.querySelector('#humidity');

async function apiFetch() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.4&units=imperial&cnt=24&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
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
    humidity.innerHTML = weatherData.main.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

// ------------------------------------------------------------------------------------

// select HTML elements in the document
const currentTemp2 = document.querySelector('#temperature2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#figcaption2');
const humidity2 = document.querySelector('#humidity2');

async function apiFetch2() {

    const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.4&units=imperial&cnt=24&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
    try{
    const response = await fetch(url2);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults2(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch2();


function displayResults2(weatherData) {
    currentTemp2.innerHTML = `<strong>${weatherData.list[8].main.temp.toFixed(0)}</strong>`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`;
    const desc2 = weatherData.list[8].weather[0].description;
    humidity2.innerHTML = weatherData.list[8].main.humidity;

    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;

}

// ------------------------------------------------------------------------------------

// select HTML elements in the document
const currentTemp3 = document.querySelector('#temperature3');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#figcaption3');
const humidity3 = document.querySelector('#humidity3');

async function apiFetch3() {

    const url3 = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.4&units=imperial&cnt=24&appid=11db6f75b42e50b8f59e0e5ea2f6bea5';
    try{
    const response = await fetch(url3);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults3(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch3();


function displayResults3(weatherData) {
    currentTemp3.innerHTML = `<strong>${weatherData.list[16].main.temp.toFixed(0)}</strong>`;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`;
    const desc3 = weatherData.list[16].weather[0].description;
    humidity3.innerHTML = weatherData.list[16].main.humidity;

    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = desc3;

}
