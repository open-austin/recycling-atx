import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';
import AddNew from './add-new.jsx';
import Details from './details.jsx';
import Spinner from './spinner.jsx';
import api from '../api';
import GeoCoder from '../geocoder';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null,
      coordinates: { lat: null, lng: null },
      view: 'map',
      currentLocation: null,
      spin: false
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

  changeView(view) {
    this.setState({view});
  }

  onSearchSubmit(event) {
    event.preventDefault();
    if (!this.state.address) return;
    api.getLocationByAddress(this.state.address, (err, location) => {
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

  setCoordinates(coordinates) {
    this.setState({ coordinates });
  }

  setSpinner(spin) {
    this.setState({ spin });
  }

  setCurrentLocation(id) {
    this.setState({ currentLocation: id });
  }

  render() {
    const View = {
      map: MapView,
      details: Details
    }[this.state.view];

    return <div className="content">
      <Spinner spin={this.state.spin} />
      <SearchBar
        onAddressChange={this.onAddressChange.bind(this)}
        onSearchSubmit={this.onSearchSubmit.bind(this)}
        address={this.state.address} />
      <View
        locations={this.state.locations}
        currentLocation={this.state.currentLocation}
        coordinates={this.state.coordinates}
        changeView={this.changeView.bind(this)}
        setCoordinates={this.setCoordinates.bind(this)}
        setSpinner={this.setSpinner.bind(this)}
        setCurrentLocation={this.setCurrentLocation.bind(this)} />
    </div>;
  }
}
