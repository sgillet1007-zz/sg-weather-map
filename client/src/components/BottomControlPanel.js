import React, { useContext } from 'react';
import WeatherMapContext from '../context/weatherMap/weatherMapContext';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const BottomControlPanel = () => {
  const weatherMapContext = useContext(WeatherMapContext);

  const handleBasemapChange = e =>
    weatherMapContext.toggleSatelliteBasemap(e.target.checked);

  const handleHeatmapChange = e =>
    weatherMapContext.toggleHeatMap(e.target.checked);

  return (
    <div className='control-panel'>
      <FormGroup row>
        {weatherMapContext.data.length > 0 && (
          <FormControlLabel
            control={
              <Switch
                checked={weatherMapContext.heatMap}
                onChange={handleHeatmapChange}
                value={weatherMapContext.heatMap}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            }
            label={'Humidity Heatmap'}
          />
        )}
        <FormControlLabel
          control={
            <Switch
              checked={weatherMapContext.satBasemap}
              onChange={handleBasemapChange}
              value={weatherMapContext.satBasemap}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          }
          label={'Satellite Basemap'}
        />
      </FormGroup>
    </div>
  );
};

export default BottomControlPanel;
