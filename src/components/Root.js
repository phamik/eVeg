import React, { Component } from 'react';
import { render } from 'react-dom';

import NavbarInstance from './Navbar';

class Root extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarInstance colour="#079915" />
        {this.props.children}
      </div>
    )
  }
}

export default Root;
