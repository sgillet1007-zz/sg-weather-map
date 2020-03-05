import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherMapContext from './weatherMapContext';
import WeatherMapReducer from './weatherMapReducer';
import {
  UPDATE_POINT_COUNT,
  GET_DATA,
  SET_LOADING,
  TOGGLE_SATELLITE_BASEMAP,
  TOGGLE_HEATMAP
} from '../types';

const WeatherMapState = props => {
  const initialState = {
    ptCount: 20,
    data: [],
    loading: false,
    heatMap: false,
    satBasemap: false
  };

  const [state, dispatch] = useReducer(WeatherMapReducer, initialState);

  // update point count
  const updatePointCount = ptCount =>
    dispatch({ type: UPDATE_POINT_COUNT, payload: ptCount });

  // get data
  const getData = async () => {
    setLoading();
    const response = await axios.get(`/api/v1/weatherdata/${state.ptCount}`);

    dispatch({
      type: GET_DATA,
      payload: response.data
    });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // toggle satellite basemap
  const toggleSatelliteBasemap = bool =>
    dispatch({ type: TOGGLE_SATELLITE_BASEMAP, payload: bool });

  // toggle heatmap
  const toggleHeatMap = bool =>
    dispatch({ type: TOGGLE_HEATMAP, payload: bool });

  return (
    <WeatherMapContext.Provider
      value={{
        ptCount: state.ptCount,
        data: state.data,
        loading: state.loading,
        heatMap: state.heatMap,
        satBasemap: state.satBasemap,
        updatePointCount,
        getData,
        setLoading,
        toggleSatelliteBasemap,
        toggleHeatMap
      }}
    >
      {props.children}
    </WeatherMapContext.Provider>
  );
};

export default WeatherMapState;
