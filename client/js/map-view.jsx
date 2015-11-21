import React from 'react';

export default class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO init leaflet plugin
  }

  render() {
    return <div id="map">
      Map view code
    </div>;
  }
}
