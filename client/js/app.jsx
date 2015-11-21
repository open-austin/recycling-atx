import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';
import Api from './api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null
    };
  }

  componentDidMount() {
    Api.getAllLocations(function(err, locations) {
    	if (err) {
	  console.log(err);
	  return;
    	}
	console.log(locations);
        this.setState({locations: locations});
    }
  }

  render() {
    return <div>
      <SearchBar address={this.state.address} />
      <MapView />
    </div>;
  }
}
