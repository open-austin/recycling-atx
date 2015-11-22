import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';
import AddNew from './add-new.jsx';
import api from './api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null,
      lat: null,
      long: null,
      
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
    console.log(event.target.value);
  }

  render() {
    return <div className="content">
      <SearchBar onAddressChange={this.addressChange} address={this.state.address} />
      <MapView locations={this.state.locations} />
    </div>;
  }
}
