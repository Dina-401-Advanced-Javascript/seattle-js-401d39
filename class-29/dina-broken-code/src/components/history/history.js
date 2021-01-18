import React from 'react';
import './history.scss';

class History extends React.Component{

  handleClick(method, url, body){
    if (this.method === 'GET' || this.method === 'DELETE') body = {};
    this.props.setInputFields(method, url, body);
  }

  render(){
    return(
      <>
      <h3>History</h3>
      <ul>
        {this.props.history.length ? this.props.history.map((entry, idx) => (
          <li key={idx} onClick=
            { () => this.handleClick(entry.method,entry.url,entry.body)}>
            <div><b>method:</b> {entry.method}<br/>
            <b>url:</b> {entry.url}</div>
            <hr></hr>
          </li>
        ))
        : 
        ''}
      </ul>
      </>
    );
  }
}

export default History;