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
          <div>
            <h1 className="text-center">Recycling ATX</h1>
            <h4>By Oct. 1, 2017, all properties will be required to provide
              recycling services to their tenants and employees.</h4>
          </div>
        </section>
        <section className="section affected">
          <h2>Who is affected?</h2>
        </section>
        <section className="section timeline">
          <h2>Timeline</h2>
        </section>
        <section className="section report">
          <h2>Report locations without recycling</h2>
        </section>
      </div>
    );
  }
}
