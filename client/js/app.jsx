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
      long: null
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
    // TODO geocode this address to coordinates
    // TODO zoom into coordinates
    // TODO look up address via api
        //    1. location found = show details & leave report
        //    2. location not found = create location & leave report
    // console.log(this.state.address);
  }

  render() {
    return <div className="content">
      <SearchBar
        onAddressChange={this.onAddressChange.bind(this)}
        onSearchClick={this.onSearchClick.bind(this)}
        address={this.state.address} />
      <MapView locations={this.state.locations} />
    </div>;
  }
}
