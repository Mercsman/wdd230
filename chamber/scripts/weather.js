// import axios from "axios"

// // https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime

// export function getWeather (lat, lon, timezone) {
//     return axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime", {
//         params: {
//             latitude: lat,
//             longitude: lon,
//             timezone,
//         },
//     }).then(({data}) => {
//         return {
//             current: parseCurrentWeather(data),
//             daily: parseDailyWeather(data),
//             hourly: parseHourlyWeather(data),
//         }
//     })
// }

// function parseCurrentWeather({current_weather, daily}) {
//     const { temperature: currentTemp,
//     windspeed: windSpeed,
//     weathercode: iconCode} = current_weather
//     const {
//         temperature_2m_max: [maxTemp],
//         temperaturre_2m_max: [maxTemp],
//         wind_temperature: [windTemp],
//     } = daily

//     return {
//         currentTemp:,
//         windSpeed:,
//         windChill: ,
//         iconCode,
//     }
// }