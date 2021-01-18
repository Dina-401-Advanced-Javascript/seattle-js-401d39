import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to the RESTy App</h1>
        <nav id="menu">
          <ul>
            <li><NavLink data-testid="homelink" to="/">Home</NavLink></li>
            <li><NavLink data-testid="historylink" to="/history">History</NavLink></li>
            <li><NavLink data-testid="helplink" to="/help">Help</NavLink></li>
          </ul>
        </nav>
      </>
    )
  }
}
export default Header;
