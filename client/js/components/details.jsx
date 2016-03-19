import React from 'react';
import api from '../api';
import ReturnBtn from './return-btn.jsx';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: null, formText: '' };
  }

  componentDidMount() {
    this.fetchLocation();
  }

  fetchLocation() {
    api.getLocation(this.props.currentLocation, (err, location) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ location });
      }
    });
  }

  reportOnChange(e) {
    this.setState({ formText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { location, formText } = this.state;
    api.addReport(location.id, { report: formText }, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ formText: '' });
        this.fetchLocation();
      }
    });
  }

  renderReports() {
    const location = this.state.location;
    if (!location.reports)
      return <p>No reports</p>;

    const reports = location.reports.map((entry) =>
      <li key={entry.id}>{entry.report}</li>);
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
      <div className={this.props.className}>
        <ReturnBtn changeView={this.props.changeView} />
        {content}
        <h2>Submit New Report</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <textarea
            className='details-text'
            rows='8'
            cols='50'
            placeholder='Enter text here'
            onChange={this.reportOnChange.bind(this)}
            value={this.state.formText} >
          </textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
