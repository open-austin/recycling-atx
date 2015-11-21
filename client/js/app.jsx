import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';
import api from './api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null
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

  render() {
    return <div>
      <SearchBar address={this.state.address} />
      <MapView locations={this.state.locations} />
    </div>;
  }
}
