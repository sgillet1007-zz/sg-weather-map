import React, { useContext } from 'react';
import WeatherMapContext from '../context/weatherMap/weatherMapContext';
import { icon, Point } from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const renderPopup = pt => (
  <Popup
    tipSize={5}
    anchor='bottom-right'
    latitude={pt.coord.lat}
    longitude={pt.coord.lon}
  >
    <div className='popup-content'>
      <strong>{pt.name}</strong>
      <div className='flexrow'>
        <img
          src={`http://openweathermap.org/img/wn/${pt.weather[0].icon}@2x.png`}
          alt='weather'
          height='50px'
        />
        <span>{`${Math.floor(pt.main.temp)}\u00b0 F`}</span>
      </div>
      <small>{pt.weather[0].description}</small>
      <small>{`Humidity: ${pt.main.humidity}%`}</small>
    </div>
  </Popup>
);

const renderCustomMarker = i =>
  new icon({
    iconUrl: `http://openweathermap.org/img/wn/${i}@2x.png`,
    iconSize: new Point(40, 40)
  });

const getBasemap = isSat => {
  const osm = {
    basemap:
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  };

  const sat = {
    basemap:
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  };

  return isSat ? sat : osm;
};

const renderMarkers = data =>
  data.length > 0 &&
  data.map((pt, i) => {
    let coords = [pt.coord.lat, pt.coord.lon];
    return (
      <Marker
        key={i}
        position={coords}
        icon={renderCustomMarker(pt.weather[0].icon)}
      >
        {renderPopup(pt)}
      </Marker>
    );
  });

const WeatherMap = () => {
  const weatherMapContext = useContext(WeatherMapContext);
  const tiles = getBasemap(weatherMapContext.satBasemap);

  return (
    <Map center={[39, -105.54722222]} zoom={7} maxZoom={20}>
      <TileLayer attribution={tiles.attribution} url={tiles.basemap} />
      {renderMarkers(weatherMapContext.data)}
      {weatherMapContext.heatMap && (
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={weatherMapContext.data}
          longitudeExtractor={m => m.coord.lon}
          latitudeExtractor={m => m.coord.lat}
          intensityExtractor={m => m.main.humidity}
          radius={30}
          gradient={{ 0.2: 'blue', 0.4: 'orange', 0.6: 'red' }}
        />
      )}
    </Map>
  );
};

export default WeatherMap;
