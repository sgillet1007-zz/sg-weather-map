import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const BottomControlPanel = props => {
  const { weatherData, mapState, handleMapToggle } = props;
  return (
    <div className='control-panel'>
      <FormGroup row>
        {weatherData.length > 0 && (
          <FormControlLabel
            control={
              <Switch
                checked={mapState.showHeatMap}
                onChange={handleMapToggle('showHeatMap')}
                value={mapState.showHeatMap}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            }
            label={'Humidity Heat Map'}
          />
        )}
        <FormControlLabel
          control={
            <Switch
              checked={mapState.sateliteBasemap}
              onChange={handleMapToggle('sateliteBasemap')}
              value={mapState.sateliteBasemap}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          }
          label={'Satelite Basemap'}
        />
      </FormGroup>
    </div>
  );
};

export default BottomControlPanel;
