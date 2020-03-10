# Colorado Weather Map

> Node/Express + React Application that displays weather data for a user-specified number of random coordinates within the state of Colorado.

Weather data source is: [openweathermap.org](https://openweathermap.org/current)

Random number source is: [random.org](https://www.random.org/clients/http/)

## Instructions for running locally

Install dependencies

```bash
npm install   # installs server dependencies
cd client     # navigate to client directory
npm install   # installs client dependencies
```

Add your OpenWeather API key to /config/default.json

```javascript
{
  "openWeatherApiKey": "[YOUR_API_KEY]"
}
```

Run Server

```bash
npm run dev     # starts both the server and client
npm run server  # starts server only
npm run client  # starts client only
```

Open End-to-End test runner (Cypress)
```bash
cd client     # navigate to client directory
npm run e2e   # opens cypress test runner
```

## Demo

A live demo is available [here](https://sg-weather-map.herokuapp.com/)
