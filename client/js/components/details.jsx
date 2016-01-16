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

  renderContent() {
    const location = this.state.location;
    if (!location)
      return <h1>Fetching location</h1>;
    return (
      <section>
        <h1>{`Reports for ${location.address}`}</h1>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </section>
    );
  }
  render() {
    const content = this.renderContent();
    return (
      <div>
        <a href="#" onClick={(e) => this.props.changeView('map')}>
          Return to map
        </a>
        {content}
        <form>
          <input type="text"></input>
          <button>Leave report</button>
        </form>
      </div>
    )
  }
}
