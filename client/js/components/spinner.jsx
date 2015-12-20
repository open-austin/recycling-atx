import React from 'react';
import classNames from 'classnames';

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const className = classNames('spinner', { hide: !this.props.spin });
    return (
      <div className={className}>
        <div className="spinner-content">
          <p>Loading</p>
        </div>
      </div>
    );
  }
}
