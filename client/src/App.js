import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import WeatherMap from './components/WeatherMap';
import TopControlPanel from './components/TopControlPanel';
import BottomControlPanel from './components/BottomControlPanel';

const App = () => {
  const [randomPtCount, setRandomPtCount] = useState(20);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mapState, setMapState] = useState({
    showHeatMap: false,
    sateliteBasemap: false
  });

  const handlePointCountChange = e => {
    setRandomPtCount(e.target.value);
  };

  const handleMapToggle = name => e => {
    setMapState({ ...mapState, [name]: e.target.checked });
  };

  const handleGetData = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.get(`/api/v1/weatherdata/${randomPtCount}`);
    setWeatherData(response.data);
    setLoading(false);
  };

  return (
    <div className='App'>
      <Header />
      <TopControlPanel
        randomPtCount={randomPtCount}
        loading={loading}
        handleGetData={handleGetData}
        handlePointCountChange={handlePointCountChange}
      />
      <WeatherMap mapState={mapState} weatherData={weatherData} />
      <BottomControlPanel
        weatherData={weatherData}
        mapState={mapState}
        handleMapToggle={handleMapToggle}
      />
    </div>
  );
};

export default App;
