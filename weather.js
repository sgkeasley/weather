// Fetch weather data from open-meteo and display current weather for London:

const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m";
  
async function getWeather() {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);

        // Display date and time
        let time = document.getElementById("time");
        let currentTime = document.createElement("p");
        currentTime.innerHTML = data.current.time;
        time.appendChild(currentTime);

        // Display temperature
        let temperature = document.getElementById("temperature");
        let currentTemp = document.createElement("p");
        currentTemp.innerHTML = data.current.temperature_2m;
        temperature.appendChild(currentTemp);

        // Display cloud cover
        let cloudCover = document.getElementById("cloud");
        let currentCloud = document.createElement("p");
        currentCloud.innerHTML = data.current.cloud_cover;
        cloudCover.appendChild(currentCloud);

        // Display precipitation
        let precipitation = document.getElementById("precipitation");
        let currentPrec = document.createElement("p");
        currentPrec.innerHTML = data.current.precipitation;
        precipitation.appendChild(currentPrec);

        // Display rain
        let rain = document.getElementById("rain");
        let currentRain = document.createElement("p");
        currentRain.innerHTML = data.current.rain;
        rain.appendChild(currentRain);

        // Display humidity
        let humidity = document.getElementById("humidity");
        let currentHum = document.createElement("p");
        currentHum.innerHTML = data.current.relative_humidity_2m;
        humidity.appendChild(currentHum);

        // Display wind direction
        let windDirection = document.getElementById("wind_direction");
        let currentWindDir = document.createElement("p");
        currentWindDir.innerHTML = data.current.wind_direction_10m;
        windDirection.appendChild(currentWindDir);

        // Display wind speed
        let windSpeed = document.getElementById("wind_speed");
        let currentWindSpeed = document.createElement("p");
        currentWindSpeed.innerHTML = data.current.wind_speed_10m;
        windSpeed.appendChild(currentWindSpeed); 
        
    } catch (error) {
        console.log(`Error fetching weather data: `, error);
    }
    
}

getWeather();
