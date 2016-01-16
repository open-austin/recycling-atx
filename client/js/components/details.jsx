import React from 'react';
import api from '../api';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: null };
  }

  componentDidMount() {
    api.getLocation(this.props.currentLocation, (err, location) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ location });
      }
    });
  }

  renderReports() {
    const location = this.state.location;
    if (!location.reports)
      return <p>No reports</p>;

    const reports = location.reports.map((report) =>
      <li>{report}</li>);
    return <ul>{reports}</ul>;
  }

  renderContent() {
    const location = this.state.location;
    if (!location)
      return <h1>Fetching location</h1>;

    const reports = this.renderReports();

    return (
      <div>
        <h1>{location.address}</h1>
        <h2>Reports</h2>
        {reports}
      </div>
    );
  }
  render() {
    const content = this.renderContent();
    return (
      <div className="details-view">
        <a href="#" onClick={(e) => this.props.changeView('map')}>
          <svg height="10px" width="10px">
            <line x1="0" y1="5" x2="8" y2="0"/>
            <line x1="0" y1="5" x2="8" y2="10"/>
          </svg>
            Return to map
        </a>
        {content}
        <h2>Submit New Report</h2>
        <form method="post">
          <textarea rows='8' cols='50' placeholder='Enter text here'></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
