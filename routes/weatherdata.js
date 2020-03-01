const express = require('express');
const router = express.Router();
const utils = require('./route_utils');
const getWeatherData = utils.getWeatherData;

// @route GET api/v1/weather
// @desc Get Weather Data for
router.get('/', async (req, res) => {
  // n = number of random points
  const n = 2;
  try {
    const weatherData = await getWeatherData(n);
    res.json(weatherData);
  } catch (error) {
    return res.status(500).json({ msg: `Server Error: ${error.message}` });
  }
});

module.exports = router;
