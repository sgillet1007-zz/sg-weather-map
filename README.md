# Design Assumptions:

1. App will display weather data for state of Colorado
2. state boundaries are assumed to be defined by the following four values representing maximum and minimum latitude and longitude values. Note - values aquired from: https://en.wikipedia.org/wiki/Colorado
   - minLat = 37
   - maxLat = 41
   - minLong = -109.046667
   - maxLong = -102.046667
3. OpenWeather API free tier will be used to fetch weather data (limited to 60 API calls per minute.) https://openweathermap.org/current
   - Current weather data for one location: by geographic coordinates
   - API call format: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
   - API key is stored as an environment variable '\$openWeatherApiKey'
4. Random numbers calculated using random.org integer generator to produce random integer values that can easily be transformed to latitude and longitude decimal by multiplying by 10e-6
