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
      <div className="details-view">
        <a href="#" onClick={(e) => this.props.changeView('map')}>
          <svg height="10px" width="10px">
            <line x1="0" y1="5" x2="8" y2="0"/>
            <line x1="0" y1="5" x2="8" y2="10"/>
          </svg>
            Return to map
        </a>
        <h1>{location.address}</h1>
        <h2>Reports</h2>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
        <h2>Submit New Report</h2>
        <form method="post">
          <textarea rows='8' cols='50' placeholder='Enter text here'></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
