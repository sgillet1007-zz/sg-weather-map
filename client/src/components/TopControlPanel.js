import React, { useContext } from 'react';
import WeatherMapContext from '../context/weatherMap/weatherMapContext';
import { Button, Select, MenuItem } from '@material-ui/core';

const TopControlPanel = props => {
  const weatherMapContext = useContext(WeatherMapContext);

  const handlePtCountChange = e =>
    weatherMapContext.updatePointCount(e.target.value);

  return (
    <div className='control-panel form'>
      <span>
        Specify number
        <br /> of random points
      </span>
      <span>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={weatherMapContext.ptCount}
          onChange={handlePtCountChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </span>
      <span>
        <Button
          onClick={weatherMapContext.getData}
          variant='outlined'
          color='primary'
          disabled={weatherMapContext.loading}
        >
          {weatherMapContext.loading ? 'Loading...' : 'Load Data'}
        </Button>
      </span>
    </div>
  );
};

export default TopControlPanel;
