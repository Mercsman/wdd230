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