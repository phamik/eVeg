import React, {Component} from 'react';
import {Grid, Col, Row, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router';

import {FormErrors} from './FormErrors';

class CheckoutForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg">
                <Grid>
                    <div className="checkout-form ">
                        <Row className="show-grid">
                            <form onSubmit={this.props.onSave}>
                                <Col md={6}>
                                <div>
                                <h2>Shipping details: </h2>
                                <br/>
                                    <FormGroup >
                                        <label className="">First Name:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstName"
                                                label="firsName"
                                                value={this.props.customer.firstName}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorsfirstName}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup c>
                                        <label className="">Last Name:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastName"
                                                label="lastName"
                                                value={this.props.customer.lastName}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorslastName}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">Email:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                label="email"
                                                value={this.props.customer.email}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorsemail}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">House number:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="houseNumber"
                                                name="houseNumber"
                                                label="houseNumber"
                                                value={this.props.customer.houseNumber}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorshouseNumber}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">Street Name:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="streetName"
                                                name="streetName"
                                                label="streetName"
                                                value={this.props.customer.streetName}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorsstreetName}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">Postcode:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="postcode"
                                                name="postcode"
                                                label="postcode"
                                                value={this.props.customer.postcode}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorspostcode}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <label className="">City:
                                        </label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                name="city"
                                                label="city"
                                                value={this.props.customer.city}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorscity}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <label className="">Country:</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="country"
                                                name="country"
                                                label="country"
                                                value={this.props.customer.country}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorscountry}/>
                                        </div>
                                    </FormGroup>
                                    </div>
                                </Col>
                                
                                <Col md={6}>
                                <div>
                                <h2>Card Details: </h2>
                                <br/>
                                
                                    <FormGroup >
                                        <label className="">Card type:
                                        </label>
                                        <div className="">
                                            <select name="cardType" label="cardType" onChange={this.props.onChange}>
                                                <option value="" selected>Choose a type</option>
                                                <option value="visa">VISA</option>
                                                <option value="visa-debit">VISA-DEBIT</option>
                                                <option value="mastercard">MASTERCARD</option>
                                                <option value="amex">AMEX</option>
                                            </select>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorscardType}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">Card Number:</label>
                                        <div className="">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Card Number"
                                                id="cardNumber"
                                                name="cardNumber"
                                                label="cardNumber"
                                                value={this.props.customer.cardNumber}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorscardNumber}/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup >
                                        <label className="">Expiry Date:</label>
                                        <div className="">
                                            <input
                                                type="month"
                                                placeholder="MM / YY"
                                                className="form-control"
                                                id="expiryDate"
                                                name="expiryDate"
                                                label="expiryDate"
                                                value={this.props.customer.expiryDate}
                                                onChange={this.props.onChange}/>
                                        </div>
                                        <div className="error-text">
                                            <FormErrors formErrors={this.props.formErrorsexpiryDate}/>
                                        </div>
                                    </FormGroup>
                                    <div className="submit-button-container">
                                    <br/>
                                    <input
                                        type="submit"
                                        disabled={this.props.saving}
                                        value={this.props.saving
                                        ? 'Ordering...'
                                        : 'Order Items'}
                                        className="submit-button "
                                        onClick={this.props.onSubmit}/>
                                </div>
                                    </div>
                                </Col>
                                

                            </form>

                        </Row>
                    </div>
                </Grid>

            </div>
        )
    }
}

export default CheckoutForm;