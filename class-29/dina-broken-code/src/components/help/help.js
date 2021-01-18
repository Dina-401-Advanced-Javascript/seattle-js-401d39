import React from 'react';
import './help.scss'
class Help extends React.Component {
  render(){
    return (
      <>
        <h3>Help</h3>
        <div id="helpContent">
          <h4>Welcome to the help docs</h4><br/>
          To use this app, enter a URL for your favorite open API (that does not require authentication), the method, and anything you'd like to send in the body in correct json format
        </div>
      </>
    )
  }
}

export default Help;