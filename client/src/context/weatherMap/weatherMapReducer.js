import {
  UPDATE_POINT_COUNT,
  GET_DATA,
  SET_LOADING,
  TOGGLE_SATELLITE_BASEMAP,
  TOGGLE_HEATMAP
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_POINT_COUNT:
      return {
        ...state,
        ptCount: action.payload
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TOGGLE_SATELLITE_BASEMAP:
      return {
        ...state,
        satBasemap: action.payload
      };

    case TOGGLE_HEATMAP:
      return {
        ...state,
        heatMap: action.payload
      };

    default:
      return state;
  }
};
