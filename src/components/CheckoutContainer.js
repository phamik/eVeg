import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import CheckoutForm from './CheckoutForm';
import Invoice from './Invoice';
import Footer from './Footer';

class CheckoutContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer: {
                firstName: '',
                lastName: '',
                houseNumber: '',
                streetName: '',
                postcode: '',
                city: '',
                country:'',
                cardType: '',
                cardNumber: '',
                expiryDate: '', 
                email: ''
            },
            cartItems: localStorage.getItem("items"),
            totalItems: localStorage.getItem("totalItems"),
            totalPrice: localStorage.getItem("totalPrice"),
            saving: false,
            
              formErrorsFirstName: {
                FirstName: ''
              },
              formErrorsLastName: {
                LastName: ''
              },
              formErrorsHouseNumber: {
                HouseNumber: ''
              },
              formErrorsStreetName: {
                StreetName: ''
              },
              formErrorsCity: {
                City: ''
              },
              formErrorsCountry: {
                Country: ''
              },
              formErrorsCardType: {
                CardType: ''
              },
              formErrorsEmail: {
                Email: ''
              },
              formErrorsCardNumber: {
                  CardNumber: ''
              },
              formErrorsDate: {
                  Date: ''
              },
              formErrorsPostcode: {
                  Postcode:''
              },
              firstNameValid: false,
              lastNameValid: false,
              emailValid: false,
              cardNumberValid: false,
              houseNumberValid: false,
              postcodeValid: false,
              dateValid: false,
              streetNameValid: false,
              cityValid:false,
              countryValid: false,
              cardTypeValid :false,
              formValid: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.validateField = this.validateField.bind(this);
        this.setStorage = this.setStorage.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.throwError = this.throwError.bind(this);
    }

    setStorage(){
        let data = JSON.stringify(this.state.customer);
        localStorage.setItem("customer", data);
    }

    onSubmit(){
        this.setStorage()
        this.setState({saving: true});
        browserHistory.push('/invoice');
        
    }

    updateCustomer(event) {
        const field = event.target.name;
        const customer = this.state.customer;
        customer[field] = event.target.value;
        return this.setState({customer: customer},
       () => { this.validateField(field, customer[field]) });
      }

      validateField(fieldName, value) {
        let fieldValidationErrorsFirstName = this.state.formErrorsFirstName;
        let fieldValidationErrorsLastName = this.state.formErrorsLastName;
        let fieldValidationErrorsEmail = this.state.formErrorsEmail;
        let fieldValidationErrorsCardNumber = this.state.formErrorsCardNumber;
        let fieldValidationErrorsDate = this.state.formErrorsDate;
        let fieldValidationErrorsPostcode = this.state.formErrorsPostcode;
        let fieldValidationErrorsHouseNumber = this.state.formErrorsHouseNumber;
        let fieldValidationErrorsStreetName = this.state.formErrorsStreetName;
        let fieldValidationErrorsCity = this.state.formErrorsCity;
        let fieldValidationErrorsCountry = this.state.formErrorsCountry;
        let fieldValidationErrorsCardType = this.state.formErrorsCardType;

        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.firstNameValid;
        let emailValid = this.state.emailValid;
        let cardNumberValid = this.state.cardNumberValid;
        let dateValid = this.state.dateValid;
        let postcodeValid = this.state.postcodeValid;
        let houseNumberValid = this.state.houseNumberValid;
        let streetNameValid = this.state.streetNameValid;
        let cityValid = this.state.cityValid;
        let countryValid = this.state.formErrorsCountry;
        let cardTypeValid = this.state.formErrorsCardType;
    
        switch (fieldName) {
            case 'firstName':
            firstNameValid = this.state.customer.firstName.length > 0;
                fieldValidationErrorsFirstName.FirstName = firstNameValid
                    ? ''
                    : ' must be entered';
                break;
            case 'lastName':
            lastNameValid = this.state.customer.lastName.length > 0;
                fieldValidationErrorsLastName.LastName = lastNameValid
                    ? ''
                    : ' must be entered';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrorsEmail.Email = emailValid
                    ? ''
                    : ' is invalid';
                break;
            case 'postcode':
                postcodeValid = value.match(/^[a-z]{2}\d{1,2}\s*\d[a-z]{2}$/i);
                fieldValidationErrorsPostcode.Postcode = postcodeValid
                    ? ''
                    : ' is invalid';
                break; 
            case 'cardNumber':
                cardNumberValid = value.match((/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) || (/^(?:5[1-5][0-9]{14})$/) || (/^(?:3[47][0-9]{13})$/));
                fieldValidationErrorsCardNumber.CardNumber = cardNumberValid
                    ? ''
                    : ' is invalid';
                break; 
            case  'houseNumber':
                houseNumberValid = this.state.customer.houseNumber.length > 0;
                fieldValidationErrorsHouseNumber.HouseNumber = houseNumberValid
                    ? ''
                    : ' is invalid';
                break;   
            case 'streetName':
                streetNameValid = this.state.customer.streetName.length > 0;
                fieldValidationErrorsStreetName.StreetName = streetNameValid
                    ? ''
                    : ' must be entered';
                break;
            case 'city':
                cityValid = this.state.customer.city.length > 0;
                fieldValidationErrorsCity.City = cityValid
                    ? ''
                    : ' must be entered';
                break;
            case 'country':
                countryValid = this.state.customer.country.length > 0;
                fieldValidationErrorsCountry.Country = countryValid
                    ? ''
                    : ' must be entered';
                break;
            case 'cardType':
                cardTypeValid = this.state.customer.cardType.length > 0;
                fieldValidationErrorsCardType.CardType = cardTypeValid
                    ? ''
                    : ' must be selected';
                break;
            default:
        }
        this.setState({
        //   formErrorsText: fieldValidationErrorsText,
        //   formErrorsEmail: fieldValidationErrorsEmail,
        //   nameValid: nameValid,
        //   emailValid: emailValid,
        formErrorsCardNumber: fieldValidationErrorsCardNumber,
        formErrorsDate: fieldValidationErrorsDate,
        formErrorsEmail: fieldValidationErrorsEmail,
        formErrorsPostcode: fieldValidationErrorsPostcode,
        cardNumberValid: cardNumberValid,
        dateValid: dateValid,
        emailValid: emailValid,
        postcodeValid: postcodeValid,
        formErrorsFirstName: fieldValidationErrorsFirstName,
        firstNameValid: firstNameValid,
        formErrorsLastName: fieldValidationErrorsLastName,
        formErrorsHouseNumber: fieldValidationErrorsHouseNumber,
        houseNumberValid: houseNumberValid,
        formErrorsStreetName: fieldValidationErrorsStreetName,
        streetNameValid: streetNameValid,
        formErrorsCity: fieldValidationErrorsCity,
        cityValid: cityValid,
        formErrorsCountry: fieldValidationErrorsCountry,
        countryValid: countryValid, 
        formErrorsCardType: fieldValidationErrorsCardType,
        cardTypeValid: cardTypeValid,
        formValid: 
              firstNameValid && 
              lastNameValid &&
              emailValid &&
              cardNumberValid &&
              postcodeValid &&
           houseNumberValid &&
            streetNameValid &&
           cityValid &&
              countryValid &&
              cardTypeValid

        }, this.validateForm());
      }

      throwError(event) {
        event.preventDefault();
        // this.onSubmit();
        let errorCheck = true;
    
        if (this.state.customer.firstName === "") {
            errorCheck = false;
            this.setState({
                formErrorsFirstName: {
                    FirstName: 'must be entered!'
                }
            })
        } else if (this.state.customer.lastName === ""){
            errorCheck = false;
            this.setState({
                formErrorsLastName: {
                    LastName: 'must be entered!'
                }
            })
        } else if (this.state.customer.email === ""){
            errorCheck = false;
            this.setState({
                formErrorsEmail: {
                    Email: 'must be entered!'
                }
            })
        } else if(this.state.customer.houseNumber === ""){
            errorCheck = false;
            this.setState({
                formErrorsHouseNumber: {
                    HouseNumber: 'must be entered!'
                }
            })
        } else if(this.state.customer.streetName === ""){
            errorCheck = false;
            this.setState({
                formErrorsStreetName: {
                    StreetName: 'must be entered!'
                }
            })
        } else if ( this.state.customer.postcode === ""){
            errorCheck = false;
            this.setState({
                formErrorsPostcode: {
                    Postcode: 'must be entered!'
                }
            }) 
        } else if(this.state.customer.city === ""){
            errorCheck = false;
            this.setState({
                formErrorsCity: {
                    City: 'must be entered!'
                }
            })     
        } else if(this.state.customer.country === ""){
            errorCheck = false;
            this.setState({
                formErrorsCountry: {
                    Country: 'must be entered!'
                }
            })  
        } else if(this.state.customer.cardNumber === ""){
            errorCheck = false;
            this.setState({
                formErrorsCardNumber: {
                    CardNumber: 'must be entered!'
                }
            }) 
        } else if(this.state.customer.cardType === ""){
            errorCheck = false;
            this.setState({
                formErrorsCardType: {
                    CardType: 'must be selected!'
                }
            }) 
        }else {
            errorCheck = true
            this.onSubmit();
        }
    
        // if (!this.state.user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        //   errorCheck = false;
        //   this.setState({
        //     formErrorsEmail: {
        //       Email: " is invalid!"
        //     }
        //   });
        // }
        this.setState({
            // formValid: 
            //   this.state.firstNameValid && 
            //   this.state.firstLastValid &&
            //   this.state.emailValid &&
            //   this.state.cardNumberValid &&
            //   this.state.postcodeValid &&
            //   this.state.houseNumberValid &&
            //   this.state.streetNameValid &&
            //   this.state.cityValid &&
            //   this.state.countryValid &&
            //   this.state.cardTypeValid

          });
        // if (errorCheck === true) {
        //   this.onSubmit();
        // }
      }

      validateForm() {
        if(this.state.firstNameValid && 
            this.state.firstLastValid &&
            this.state.emailValid &&
            this.state.cardNumberValid &&
            this.state.postcodeValid &&
            this.state.houseNumberValid &&
            this.state.streetNameValid &&
            this.state.cityValid &&
            this.state.countryValid &&
            this.state.cardTypeValid) {
           this.onSubmit(); 
        }
        
        // console.log(this.state.positionValid + " state");
        //  this.setState({saving: true});
      }

    render(){
        return(
            <div>
                <CheckoutForm 
                    onSubmit={this.throwError}
                    onChange={this.updateCustomer}
                    customer={this.state.customer}
                    cartItems={this.state.cartItems}
                    totalItems={this.state.totalItems}
                    totalPrice={this.state.totalPrice}
                    saving={this.state.saving}
                    formErrorsfirstName={this.state.formErrorsFirstName}
                    formErrorslastName= {this.state.formErrorsLastName}
                    formErrorshouseNumber= {this.state.formErrorsHouseNumber}
                    formErrorsstreetName= {this.state.formErrorsStreetName}
                    formErrorscity= {this.state.formErrorsCity}
                    formErrorscountry= {this.state.formErrorsCountry}
                    formErrorscardType= {this.state.formErrorsCardType}
                    formErrorsemail= {this.state.formErrorsEmail}
                    formErrorscardNumber= {this.state.formErrorsCardNumber}
                    formErrorsexpiryDate= {this.state.formErrorsDate}
                    formErrorspostcode= {this.state.formErrorsPostcode}
                    formErrorshouseNumber= {this.state.formErrorsHouseNumber}
                    formErrorsstreetName = {this.state.formErrorsStreetName}
                    firstNameValid ={this.state.firstNameValid}
                    lastNameValid = {this.state.lastNameValid}
                    emailValid= {this.state.emailValid}
                    cardNumberValid= {this.state.cardNumberValid}
                    postcodeValid= {this.state.postcodeValid}
                    dateValid= {this.state.dateValid}
                    houseNumberValid= {this.state.houseNumberValid}
                    streetNameValid = {this.state.streetNameValid}
                    cityValid = {this.state.cityValid}
                    countryValid = {this.state.countryValid}
                    cardTypeValid = {this.state.cardTypeValid}
                    formValid= {this.state.formValid}
                />
                <Footer/>
            </div>
        )
    }
}

export default CheckoutContainer;