import React from 'react';
import {
    Table,
    thead,
    tr,
    th,
    tbody,
    td
} from 'react-bootstrap';
import pic from './../img/shoppingBackground.jpg';

import Footer from './Footer';
require('./../scss/components/_invoice.scss');


class Invoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: JSON.parse(localStorage.getItem("customer")),
            cartItems: JSON.parse(localStorage.getItem("items")),
            totalItems: localStorage.getItem("totalItems"),
            totalPrice: localStorage.getItem("totalPrice"),
            date: '',
            // customer: {
            //     firstName: '',
            //     lastName: '',
            //     houseNumber: '',
            //     streetName: '',
            //     postcode: '',
            //     city: '',
            //     country:'',
            //     cardType: '',
            //     cardNumber: '',
            //     expiryDate: ''
            // },
            notif: {
              verticalAlign: "bottom",
              textAlign: "center"
            },
            move: {
              marginTop: "50px"
            }
        }
        this.getDate = this
            .getDate
            .bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.getBasket = this.getBasket.bind(this);
    }

    componentDidMount(){
        console.log(this.state.cartItems);
        this.getCustomer();
        this.getDate();
        this.getBasket();

    }

    componentWillUnmount() {
        // localStorage.clear();
    }

    getCustomer(){
        // this.setState({
        //     customer: {
        //         firstName: this.state.customerRaw.firstName,
        //         lastName: this.state.customerRaw.lastName,
        //         houseNumber: this.state.customerRaw.houseNumber,
        //         streetName: this.state.customerRaw.streetName,
        //         postcode: this.state.customerRaw.postcode,
        //         city: this.state.customerRaw.city,
        //         country:this.state.customerRaw.country,
        //         cardType: this.state.customerRaw.cardType,
        //         cardNumber: this.state.customerRaw.cardNumber,
        //         expiryDate: this.state.customerRaw.expiryDate
        //     },
        // })
        // console.log(this.state.customer);

    }

    getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        this.setState({date: today})
    }

    getBasket(){
        let cartItemsRaw = this.state.cartItems;
        let text = "";
        // for (let x = 0; x < cartItemsRaw.length; x++){
        //     text = cartItemsRaw[x] + "\n";

        // }
        let productName = cartItemsRaw.map(a => a.name + '<br/>' );
        document.getElementById("name").innerHTML = productName.join(" ") ;

        let productPrice = cartItemsRaw.map(a => a.price + '<br/>' );
        document.getElementById("price").innerHTML = productPrice.join(" ") ;

    }

    render() {
        const date = this.state.date;
        // let cartItemsRaw = this.state.cartItems;
        // // let productName = cartItemsRaw.map(a => a.name);
        // let productName = cartItemsRaw.map(a => a.name + "\n" );
        // let text = "";
        // for (let x in cartItemsRaw){
        //     text += cartItemsRaw[x] + " ";
        // }
        // document.getElementById("demo").innerHTML = text;
        return (
          <div className="bg">
            <div className="invoice-box" style={this.state.move}>
                <Table striped bordered condensed hover>
                    <thead></thead>
                    <tbody>
                        <tr className="top">
                            <td colSpan="2">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td className="title">
                                                <h1>
                                                Invoice <br/>
                                                    eVeg.com
                                                </h1>
                                                <br />
                                                <tr style={this.state.notif}>
                                                  <h5>Your order has been placed! This is your invoice.</h5>
                                                </tr>
                                            </td>
                                            <td className="date">
                                            <h3>
                                                Date: {date}
                                            </h3>

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        <tr className="information">
                            <td colSpan="2">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {this.state.customer.firstName} {this.state.customer.lastName} <br/>
                                                {this.state.customer.houseNumber} {this.state.customer.streetName} <br/>
                                                {this.state.customer.city}, {this.state.customer.postcode} <br/>
                                                {this.state.customer.country}

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        <tr className="heading">
                            <td >
                               Item
                            </td>
                            <td >
                               Price
                            </td>
                        </tr>
                        <tr>
                        <td id="name">
{/*{productName}*/}
                        </td>
                        <td id="price">

                        </td>
                        </tr>
                        <tr className="payment">
                        <td>
                        </td>
                        <td>
                        Payment Method: {this.state.customer.cardType.toUpperCase()}
                        </td>
                        </tr>
                        <tr className="total">
                        <td>
                        </td>
                        <td>
                        Total: {this.state.totalPrice}
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer/>
          </div>
        )
    }
}

export default Invoice;
