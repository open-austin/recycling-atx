import React from 'react';

export default class ReturnBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#" onClick={(e) => this.props.changeView('map')}>
        <svg height="10px" width="10px">
          <line x1="0" y1="5" x2="8" y2="0"/>
          <line x1="0" y1="5" x2="8" y2="10"/>
        </svg>
          Return to map
      </a>
    );
  }
}

ReturnBtn.defaultProps = {
  changeView: function() {
    console.error('changeView not provided');
  }
};
