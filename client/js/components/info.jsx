import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

render() {
  return (
      <div>
        <section className="section recycle-header">
          <div className='container'>
            <div className='row'>
              <h1 className="text-center">Recycling ATX</h1>
              <h4>By Oct. 1, 2017, all properties will be required to provide
                recycling services to their tenants and employees.</h4>
            </div>
            <div className='row'>
              <div className='col-4-xs'></div>
              <div className='col-4-xs text-center'>
              <button className='btn btn-lg btn-report'>Report!</button>
              <button className='btn btn-lg btn-learn'><a href='http://austintexas.gov/uro'>Learn More.</a></button>
              </div>
              <div className='col-4-xs'></div>
            </div>

          </div>
        </section>

        <section className='section why'>
          <div>
            <h2>Why Care?</h2>
            <p className='text-center'>
            Currently less than 35% of households and less than 10% of businesses in the U.S. recycle. <a href='#' target='_blank'>(EPA 2011)</a>
            </p>
            <p className='text-center'>
            Americans alone generate approximately 250 million tons of household trash each year. <a href='http://library.cqpress.com/cqresearcher/document.php?id=cqresrre2007121400' target='_blank'>(CQ Researcher)</a>
            </p>
            <p className='text-center'>
            If the US recycling levels can reach 75% it will be the environmental benefit of removing 50 million cars from the road each year and it will generate 1.5 million new jobs.
            </p>

          </div>
        </section>

        <section className="section benefits">
          <div className='benefit-container'>
            <h2>Benefits</h2>
            <p className='text-center'>Did you know?</p>
            <h4 className='text-center'>Select the benefits that are not a result of recycling.</h4>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                  <div className="card cf">
                    <div className="content">
                      <div className="front">
                      Saves Energy
                      </div>
                      <div className="back">
                      This is a benefit of recycling!
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12'>
                  <div className="card cf">
                    <div className="content">
                      <div className="front">
                      Conserves natural resources
                      </div>
                      <div className="back">
                      True! Recycling helps conserve natural resources.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-xs-12'>
                  <div className="card cf">
                    <div className="content">
                      <div className="front">
                      Reduces greenhouse gas emissions
                      </div>
                      <div className="back">
                      Recycling helps reduce greenhouse gas emissions!
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12'>
                  <div className="card cf">
                    <div className="content">
                      <div className="front">
                      Reduces the amount of waste sent to landfills
                      </div>
                      <div className="back">
                      Yes! Reduce, resuse, recycle!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className="section goals">
          <h2>Timeline</h2>
          <p>By Oct. 1, 2017, <strong>all</strong> properties will be required to ensure tenants and employees have convenient access to recycling.</p>
          <div class='container'>
            <div className='row'>
              <div className='col-xs-4'>
                <i className="fa fa-home fa-4x" aria-hidden="true"></i>
              </div>
              <div className='col-xs-8'>
              <h5>Multi Residential Properties</h5>
              <p>including:</p>
              <ul>
                <li>Apartments</li>
                <li>Condominiums</li>
                <li>Mobile Home Parks</li>
                <li>Private Funded Dorms</li>
                <li>Assisted Living Facilities</li>
              </ul>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-4'>
                <i className="fa fa-building fa-4x" aria-hidden="true"></i>
              </div>
              <div className='col-xs-8'>
              <h5>Multi Residential Properties</h5>
              <p>including:</p>
              <ul>
                <li>Retail</li>
                <li>Medical Facilities</li>
                <li>Religious Buildings</li>
                <li>Commercial Office Buildings</li>
                <li>Private Educational Facilities</li>
                <li>Industrial and Manufacturing Facilities</li>
              </ul>
              </div>
            </div>
          </div>

        </section>

        <section className="section report">
          <h2>Call To Action</h2>
        </section>
      </div>
    );
  }
}
