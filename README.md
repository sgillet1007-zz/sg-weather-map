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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
