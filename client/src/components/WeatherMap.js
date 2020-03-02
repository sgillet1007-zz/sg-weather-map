import React from 'react';
import { icon, Point } from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const WeatherMap = props => {
  const { mapState, weatherData } = props;

  const basemap = mapState.sateliteBasemap
    ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png';
  const attribution = mapState.sateliteBasemap
    ? 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

  const renderMarkers = () =>
    weatherData.length > 0 &&
    weatherData.map((pt, i) => {
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

  const renderCustomMarker = code =>
    new icon({
      iconUrl: `http://openweathermap.org/img/wn/${code}@2x.png`,
      iconSize: new Point(40, 40)
    });

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

  return (
    <Map center={[39, -105.54722222]} zoom={7} maxZoom={20}>
      <TileLayer attribution={attribution} url={basemap} />
      {renderMarkers()}
      {mapState.showHeatMap && (
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={weatherData}
          longitudeExtractor={m => m.coord.lon}
          latitudeExtractor={m => m.coord.lat}
          intensityExtractor={m => m.main.humidity}
          radius={50}
          gradient={{ 0.4: 'blue', 0.6: 'orange', 1: 'red' }}
        />
      )}
    </Map>
  );
};

export default WeatherMap;
