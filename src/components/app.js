import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import Home from './Home/home';



export default class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main">
            <div className="container-fluid">
              <Home />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
