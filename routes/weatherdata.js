const express = require('express');
const router = express.Router();
const utils = require('./route_utils');
const getWeatherData = utils.getWeatherData;

// @route GET api/v1/weatherdata/:pts
// @desc Get Weather Data for n random coordinates
router.get('/:pts', async (req, res) => {
  const n = parseInt(req.params.pts);
  try {
    const weatherData = await getWeatherData(n);
    res.json(weatherData);
  } catch (error) {
    return res.status(500).json({ msg: `Server Error: ${error.message}` });
  }
});

module.exports = router;
