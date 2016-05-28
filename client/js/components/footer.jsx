import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  viewAboutOnClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.changeView('about');
    };
  }

render() {
  return (
    <footer className='footer-container'>
      <div className='container'>
          <small>
            <p className='footer-text'>
              <a className='footer-link' href='http://open-austin.org' target='_blank'> Open-Austin</a> 2016 |
              <a className='footer-link' href='http://github.com/open-austin/recycling-atx' target='_blank'> Github</a> |
              <a className='footer-link' href='http://www.eventbrite.com/o/austin-resource-recovery-business-outreach-4720676027' target='_blank'> Events</a> |
              <a className='footer-link' onClick={this.viewAboutOnClick()} > About</a>
            </p>

          </small>
      </div>

    </footer>
    );
  }
}
