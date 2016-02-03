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
      //todo: link to open austin written by: people that have contributed hyperlink
      <h3><a href='http://open-austin.org'>Open-Austin.org</a></h3>
      <p>Contributors to the project include:
      <a href='http://github.com/gusIreland'>Gus Ireland</a>,
      <a href='http://github.com/'>Preston Pham</a>,
      <a href='http://github.com/'>Derek Gullege</a>,
      <a href='http://github.com/mapineda'>Marco Pineda</a>
      </p>
      //Todo: made with love in Austin, TX

    </footer>
    );
  }
}
