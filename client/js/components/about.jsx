import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: null };
  }

  render() {
    return (
      <div className="about-view">
        <div className='wrapper'>
          <div className='return'>
            <a href="#" onClick={(e) => this.props.changeView('map')}>
              <svg height="10px" width="10px">
                <line x1="0" y1="5" x2="8" y2="0"/>
                <line x1="0" y1="5" x2="8" y2="10"/>
              </svg>
                Return to map
            </a>
          </div>

          <div className='row issues'>
            <h2>Notice Any Issues?</h2>
            <button>
              <a href='mailto:projects@marcopineda.com?subject=Recycle%20Please%20Issue&body=issues:%0Adescription:%0ASteps%20To%20Reproduce:'>Contact Us</a>
            </button>
          </div>
          <div className='row faqs'>
            <h2>Frequently Asked Questions</h2>
            <h3>What is Recycle Please?</h3>
            <p>Recycle Please is the coordinated effort of a group of volunteers passionate about improving Austin's recycling process.</p>
            <h3>What is the Universal Recyling Ordinance?</h3>
            <p>The Universal Recycling Ordinance supports Austin’s Zero Waste goal by requiring affected property owners to ensure that tenants and employees have access to convenient recycling. </p>
            <p>By Oct. 1, 2017, all properties will be required to provide recycling services to their tenants and employees. </p>
            <h3>Is Recycle Please open-sourced?</h3>
            <p>Yes.</p>

          </div>


        </div>
      </div>
    )
  }
}
