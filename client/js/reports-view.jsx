import React from 'react';

export default class ReportView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
   
  showReports() {
    
  }
    
  render() {
    let classes = 'container reports-view';
    if (this.props.currentPage !== 'reports') {
        classes += ' hide';
        console.log(this.props.currentPage);
    }
    {/*<div>{this.props.address}</div>*/}
    {/*<div>showReports()</div>*/}
    return <div className={classes}>
        <h1>Reports view</h1>
        <button onClick={this.props.onReportSubmit}>Submit</button>
    </div>
  }
}