import React from 'react';
import { Button, Select, MenuItem } from '@material-ui/core';

const TopControlPanel = props => {
  const {
    randomPtCount,
    loading,
    handleGetData,
    handlePointCountChange
  } = props;

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
          value={randomPtCount}
          onChange={handlePointCountChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </span>
      <span>
        <Button
          onClick={handleGetData}
          variant='outlined'
          color='primary'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load Data'}
        </Button>
      </span>
    </div>
  );
};

export default TopControlPanel;
