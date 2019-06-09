import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @name Header
 * @description as name suggest it is Header of the whole App
 * It has the nav part of the App.
 */

const headerStyle = {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    color: 'white',
    padding: '0px 80px'
};

const Header = props => (
    <header style={headerStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav mr-auto">
            <li style={{marginRight: '20px'}}><Link to={'/'} className="nav-link"> Home </Link></li>
            <li style={{marginRight: '20px'}}><Link to={'/search'} className="nav-link">Search Books</Link></li>
          </ul>
          </nav>
    </header>
);

export default Header;