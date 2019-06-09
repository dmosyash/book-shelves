import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import MyLibrary from './containers/MyLibrary';
import Search from './containers/Search';

import './App.css';

/**
 * @name App
 * @description The main component of the app.
 * It contains two parts Header and the Route part
 */

class App extends Component {

  render() {
      const styleContainer = {
        padding: '50px 80px',
        backgroundColor: '#dfdfdf',
        minHeight: '90vh'
      }
    
    return (
      <div className="App">
        <Header />
        <div style={styleContainer}>
          <Switch>
            <Route exact path="/" component={MyLibrary} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
