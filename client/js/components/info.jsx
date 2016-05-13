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

              <div className="card">
                <div className="content">
                  <div className="front">
                  Benefit 1
                  </div>
                  <div className="back">
                  True!
                  </div>
                </div>
              </div>

        </section>

        <section className="section timeline">
          <h2>Timeline</h2>
          <p>By Oct. 1, 2017, all properties will be required to ensure tenants and employees have convenient access to recycling.</p>
        </section>

        <section className="section report">
          <h2>Call To Action</h2>
        </section>
      </div>
    );
  }
}
