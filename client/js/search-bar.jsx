import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div className="search-bar-container">
      <span><i className="fa fa-map-marker fa-3x pindrop"></i></span>
      <input
        type="text"
        placeholder="Enter Address"
        className="input-address"
        value={this.props.address}>
      </input>
      <button className="search-button">Find</button>
    </div>;
  }
}
