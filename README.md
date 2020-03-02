# Colorado Weather Map

> Node/Express + React Application that displays weather data for a user-specified number of random coordinates within the state of Colorado.

Weather data source is: [openweathermap.org](https://openweathermap.org/current)

Random number source is: [random.org](https://www.random.org/clients/http/)

## Instructions for running locally

Install dependencies

```bash
npm install
cd client
npm install
```

### OpenWeather API Key

Add your OpenWeather API key to /config/default.json

```javascript
{
  "openWeatherApiKey": "[YOUR_API_KEY]"
}
```

### Run Server

```bash
npm run dev     # starts both the server (on port 5000) and client (on port 3000)
npm run server  # starts server only
npm run client  # starts client only
```

## Live Demo

A live demo is available [here](https://sg-weather-map.herokuapp.com/)
