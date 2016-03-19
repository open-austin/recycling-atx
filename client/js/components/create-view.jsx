import React from 'react';
import ReturnBtn from './return-btn.jsx';
import api from '../api';

export default class CreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      coordinates: [0, 0],
      report: ''
    };
  }

  nameOnChange(e) {
    this.setState({ name: e.target.value });
  }

  addressOnChange(e) {
    this.setState({ address: e.target.value });
  }

  reportOnChange(e) {
    this.setState({ report: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      address: this.state.address,
      coordinates: this.state.coordinates
    };
    api.createLocation(data, (err, location) => {
      if (err) {
        return console.error(err);
      }

      api.addReport(location.id, { report: this.state.report }, (err, response) => {
        if (err) {
          return console.error(err);
        }
        // todo success flow
      });
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <ReturnBtn changeView={this.props.changeView} />
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Name</label>
          <input
            type="text"
            onChange={this.nameOnChange.bind(this)}
            value={this.state.name} />
          <label>Address</label>
          <input
            type="text"
            onChange={this.addressOnChange.bind(this)}
            value={this.state.address} />
          <label>Coordinates</label>
          <div>90.12 4.31</div>
          <textarea
            className='details-text'
            rows='8'
            cols='50'
            placeholder='Enter report here'
            onChange={this.reportOnChange.bind(this)}
            value={this.state.report} />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
