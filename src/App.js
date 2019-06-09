import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import MyLibrary from './containers/MyLibrary';
import Search from './containers/Search';

import './App.css';

class App extends Component {

  goToSearch = id => this.props.history.push('/search');

  goHome = () => this.props.history.push('/');

  render() {
      const styleContainer = {
        padding: '50px 80px',
        backgroundColor: '#dfdfdf',
        minHeight: '80vh'
      }
    
    return (
      <div className="App">
        <Header goToSearch={this.goToSearch} goHome={this.goHome} />
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
