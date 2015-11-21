import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div>
      <span>Pindrop</span>
      <input
        type="text"
        placeholder="Enter Address"
        className="input-address"
        value={this.props.address}>
      </input>
      <button>Find</button>
    </div>;
  }
}
