import React from 'react';
import './history.scss';

class DetailedHistory extends React.Component{


  handleClick(method, url, body){
    if (this.method === 'GET' || this.method === 'DELETE') body = {};
    this.props.setInputFields(method, url, body);
    //need to navigate them back to home
  }

  render(){
    console.log(this.props);
    return(
      <>
      <h3>Detailed History</h3>
      <div>Click on an entry to populate the form with the chosen method, url and body</div>
      <ul id="historyUL">
        {this.props.history.length ? this.props.history.map((entry, idx) => (
          <li key={idx} onClick=
            { () => this.handleClick(entry.method,entry.url,entry.body)}>
            <div><b>method:</b> {entry.method}<br/>
            <b>url:</b> {entry.url}</div>
            {entry.body.length? 
              <div><b>body:</b> {JSON.stringify(entry.body)}</div>
            :''}
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

export default DetailedHistory;