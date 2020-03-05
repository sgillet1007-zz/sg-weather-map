import React from 'react';
import './App.css';

import WeatherMapState from './context/weatherMap/WeatherMapState';

import Header from './components/Header';
import TopControlPanel from './components/TopControlPanel';
import WeatherMap from './components/WeatherMap';
import BottomControlPanel from './components/BottomControlPanel';

const App = () => {
  return (
    <WeatherMapState>
      <div className='App'>
        <Header />
        <TopControlPanel />
        <WeatherMap />
        <BottomControlPanel />
      </div>
    </WeatherMapState>
  );
};

export default App;
