import React from 'react';
// import findAccuratePosition from '../accurateposition';
import config from '../../../config';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const defaultPosition = config.defaultPosition; // todo: read from configuration?
export default class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      /* geolocation IS NOT available */
    }
  }

  viewDetailsOnClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.setCurrentLocation(id);
      this.props.changeView('details');
    };
  }

  viewAboutOnClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.changeView('about');
    };
  }

  renderMarkers() {
    return this.props.locations.map(({id, coordinates, address, reports}) => {
      const { x, y } = coordinates;
      return (
        <Marker key={id} position={ [x, y] }>
          <Popup>
            <div>
              <p>{address}</p>
              <p>{reports ? `${reports} reports` : 'No Reports' }</p>
              <a href="#" onClick={this.viewDetailsOnClick(id)}>
                View more details or report this location
              </a>
            </div>

          </Popup>
        </Marker>
      );
    });
  }

  render() {
    const markers = this.renderMarkers();
    const coordinates = this.props.coordinates;
    const center = coordinates.lat && coordinates.lng ?
      [coordinates.lat, coordinates.lng] :
      defaultPosition;

    return (
      <Map id="map" center={center} zoom={13}>
        <TileLayer
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwaW5lZGEiLCJhIjoiY2loOWgybDhnMHR4eHUwa2xhOHRnYTJ3aiJ9.OLTnRf2Py_IXUBSfG8dbPQ'
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          id='mapineda.o7kgelpe'
          accessToken='pk.eyJ1IjoibWFwaW5lZGEiLCJhIjoiY2loOWgybDhnMHR4eHUwa2xhOHRnYTJ3aiJ9.OLTnRf2Py_IXUBSfG8dbPQ'
        />
      {markers}
      </Map>
    );
  }
}
