import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button } from 'react-bootstrap';
import NavbarHeader from './NavHeader';
require('./../scss/components/_navbarinstance.scss');


class NavbarInstance extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      navExpanded: false,
      button: {
        backgroundColor: props.colour,
        width: "100px",
        height: "70px",
        marginLeft: "10px",
        marginTop: "10px",
        border: "none",
        position: "relative",
        zIndex: 10000
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      navExpanded: !this.state.navExpanded
    })
  }

  render() {
    if(this.state.navExpanded) {
      var navheader = <NavbarHeader />
    }
    return (
      <div>
        <Button onClick={this.handleClick} style={this.state.button}><span className="glyphicon glyphicon-align-justify white"></span></Button>
        {navheader}
      </div>
    )
  }
}

export default NavbarInstance;
