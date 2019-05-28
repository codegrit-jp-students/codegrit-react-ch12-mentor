import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

class Top extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Top;