const axios = require('axios');
const config = require('config');
const apiKey = config.get('openWeatherApiKey');

const getRandomNumbersArray = async (n, type) => {
  // value range constants: value*10e6
  const min_lat = 37000000;
  const max_lat = 41000000;
  const min_lng = -109046667;
  const max_lng = -102046667;

  // random.org query string values
  const min = type === 'lat' ? min_lat : min_lng;
  const max = type === 'lat' ? max_lat : max_lng;

  // initialize return array
  let valuesArr = [];

  const rawValues = await axios.get(
    `https://www.random.org/integers/?num=${n}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
  );

  if (n === 1) {
    valuesArr.push(rawValues.data / 1000000);
  } else if (n > 1) {
    valuesArr = rawValues.data
      .split('\n')
      .map(s => parseInt(s) / 1000000)
      .filter(int => int);
  }
  return valuesArr;
};

const getRandomCoordinates = async n => {
  // if negative values of n is passed, fallback to default value of 20 (also UI default value)
  const num = n > 0 ? n : 20;
  // initialize arrays for random lat and long values
  let lngValuesArr = [];
  let latValuesArr = [];
  // initialize return array
  let randomCoords = [];

  try {
    latValuesArr = await getRandomNumbersArray(num, 'lat');
    lngValuesArr = await getRandomNumbersArray(num, 'lng');

    // build array of coordinate pair objects
    randomCoords = latValuesArr.map((lat, i) => ({
      ['lat']: lat,
      ['lon']: lngValuesArr[i]
    }));
  } catch (error) {
    console.error(error.message);
  } finally {
    return randomCoords;
  }
};

const getWeatherData = async n => {
  // generate array of random coordinates
  const coordArr = await getRandomCoordinates(n);
  // initialize array of individual axios requests
  const dataRequests = coordArr.map(c =>
    axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${c.lat}&lon=${c.lon}&units=imperial&appid=${apiKey}`
    )
  );
  // initialize return array
  let weatherData = [];

  try {
    await axios.all([...dataRequests]).then(responseArr => {
      weatherData = [...responseArr].map(i => i.data);
    });
  } catch (error) {
    console.error(error.message);
  } finally {
    return weatherData;
  }
};

exports.getWeatherData = getWeatherData;
