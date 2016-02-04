import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

render() {
  return (
    <footer className='footer-container'>
      <div className='container'>
          <small>
            <p className='footer-text'> An
              <a className='footer-link' href='http://open-austin.org' target='_blank'> Open-Austin</a> project |
              <a className='footer-link' href='http://github.com/open-austin/recycling-atx' target='_blank'> Github</a> |
              <a className='footer-link' href='#' target='_blank'>About</a>
            </p>

          </small>
      </div>

    </footer>
    );
  }
}
