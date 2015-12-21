import React from 'react';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const location = this.props.locations.find((loc) => {
      return this.props.currentLocation === loc.id;
    });

    return (
      <div>
        <a href="#" onClick={(e) => this.props.changeView('map')}>
          Return to map
        </a>
        <h1>{`Reports for ${location.address}`}</h1>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
        <form>
          <input type="text"></input>
          <button>Leave report</button>
        </form>
      </div>
    )
  }
}
