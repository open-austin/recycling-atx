import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div className="search-bar-container">
      <span className="icon-container"><i className="fa fa-map-marker fa-2x search-bar-icon"></i></span>
      <input
        type="text"
        placeholder="Enter Address"
        className="input-address"
        value={this.props.address}
        onChange={this.props.onAddressChange}>
      </input>
      <span
        className="icon-container"
        onClick={this.props.onSearchClick}>
        <i className="fa fa-search fa-2x search-bar-icon"></i>
      </span>
    </div>;
  }
}
