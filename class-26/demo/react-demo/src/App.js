import React from 'react';
import Header from './header';
import './app.scss';

class Footer extends React.Component {
  render(){
    return (
      <footer>I know best</footer>
    )
  }
}

//this tells us it is a react component
class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      words: 'nothing to see here'
    }
  }

  handleWords = event => {
    let newWords = event.target.value;
    this.setState({words: newWords});
  }

  handleClick = event => {
    event.preventDefault();
    let newWords = this.state.words.split('').reverse().join('');
    this.setState({ words: newWords})
    //might also be able to do it like this in some cases?
    //this.state.words = newWords;
  }
  render() {
    return (
      <>
      <Header />
      {/* this is an easy way to put variables directly into my html, use this.state*/}
      <h3>{this.state.words}</h3>
      <input onChange={this.handleWords}></input>
      <button onClick={this.handleClick}>Click Me</button>
      <Footer />
      </>
    )
  }
}


//instead of module exports, we do this so that others can find it and include it
export default App;




/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/