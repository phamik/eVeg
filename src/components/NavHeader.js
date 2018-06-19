import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Button, Grid, Row, Col } from 'react-bootstrap';
require('./../scss/components/_navbarinstance.scss');

class NavbarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid" id="navheader">
          <Grid>
            <Row className="show-grid">
              <Col mdOffset={6}>
                <Row>
                  <Col md={3}>
                    <div className="headerButton">
                      <i className="glyphicon glyphicon-home white"></i><a href="/"><span className="txt"> Home</span></a>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="headerButton">
                      <i className="glyphicon glyphicon-info-sign white"></i><span className="txt"> About</span>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="headerButton">
                      <i className="glyphicon glyphicon-user white"></i><span className="txt"> Login</span>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="headerButton">
                      <i className="glyphicon glyphicon-envelope white"></i><span className="txt"> Contact</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

export default NavbarHeader;
