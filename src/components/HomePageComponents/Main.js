import React, { Component } from 'react';
import { render } from 'react-dom';
import NavbarInstance from './../Navbar';
import { Button, Carousel } from 'react-bootstrap';
import Footer from './../Footer';
import pic from './../../b2.jpg';
require('./../../scss/components/_main.scss');

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="pic">
          <h1 id="heading"><em><b>e</b>Veg.com</em></h1>
          <div className="row" id="row">
              <div className="callbacks_container">
                <ul className="rslides" id="slider3">
                  <li>
                    <div className="slider-info">
                      <h3>Welcome to Our Website</h3>
                      <p>Have a Look at our Beautiful Produce</p>
                      <a href="http://localhost:3000/shop-all">
                        <Button bsStyle="primary" bsSize="large" id="buttonToShop"> Shop all products </Button>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
