WeatherData
minCelsius number -----main.temp_min
maxCelsius number -----main.temp_max
minFahrenheit number ----------(main.temp_min × 9/5) + 32 = 32°F
maxFahrenheit number
humidity number -----main.humidity
windSpeed number -----wind.speed
windDirection string -----wind.deg

ForecastData
minCelsius number
maxCelsius number
minFahrenheit number
maxFahrenheit number
humidity number
windSpeed number
windDirection string
time number -----dt

CityData
name string -----name
coord { ----- coord
description:
geo coordinates
}
country string
country code -----sys.country

population number
population of the city
