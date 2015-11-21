import React from 'react';
import SearchBar from './search-bar.jsx';
import MapView from './map-view.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: null
    };
  }

  componentDidMount() {
    // TODO fetch locations

    // TODO update the state.locations

  }

  render() {
    return <div>
      <SearchBar address={this.state.address} />
      <MapView />
    </div>;
  }
}
