import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';
import AddNew from './add-new.jsx';
import api from '../api';
import GeoCoder from '../geocoder';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null,
      coordinates: { lat: null, lng: null }
    };
  }

  componentDidMount() {
    api.getAllLocations((err, locations) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ locations: locations });
    });
  }

  onAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  onSearchClick(event) {
    if (!this.state.address) return;
    api.getLocation(this.state.address, (err, location) => {
      if (err) {
        console.log('unable to get location', err);
        return;
      }

      if (!location) {
        // Location doesn't exist, drop new marker
        GeoCoder.geocode(this.state.address, (err, response) => {
          if (err) {
            console.log(err);
            return;
          }
          // TODO add marker popup to prompt adding location
          this.setState({ coordinates: response.coordinates });
        });
      } else {
        // TODO add marker popup for existing location
        this.setState({
          coordinates: {
            lat: location.coordinates.x,
            lng: location.coordinates.y
          }
        });
      }
    });
  }

  render() {
    return <div className="content">
      <SearchBar
        onAddressChange={this.onAddressChange.bind(this)}
        onSearchClick={this.onSearchClick.bind(this)}
        address={this.state.address} />
      <MapView
        locations={this.state.locations}
        coordinates={this.state.coordinates} />
    </div>;
  }
}
