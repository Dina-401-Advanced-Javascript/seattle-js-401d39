import React from 'react';

class Form extends React.Component{

  constructor(properties){
    super(properties);
    this.state = {
      display: false,
      url:'',
      method:''
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    //to get the value in the form, we get event.target.url.value where url is the name of the element (the input element)
    this.setState({url : event.target.url.value});
    if (this.state.method) {this.setState({display: true})};
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({method: event.target.name});
    if (this.state.url) {this.setState({display: true})};
  }

  render(){
    return(
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <input name='url' type='text' placeholder='Enter a URL'></input>
          <button type="submit">Submit</button>
        </form>
        <div onClick={this.handleClick}>
          <button name='get'>GET</button>
          <button name='post'>POST</button>
          <button name='put'>PUT</button>
          <button name='delete'>DELETE</button>
        </div>
        {!this.state.display ? "" : 
        <div>
          <h3>URL: {this.state.url}</h3>
          <h3>METHOD: {this.state.method}</h3>
        </div>
        }
      </div>
    );
  }
}

export default Form;