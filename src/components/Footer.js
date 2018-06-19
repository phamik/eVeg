import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="#" >Need any help?</a>
                <span>  /  </span>
                <a href="#" >Say Hi on Facebook</a>
                <span>  /  </span>
                <a href="#" >Say Hi on Twitter</a>
                <span>  /  </span>
                <a href="#" >Say Hi on Instagram</a>
            </p>
            <p>&copy; 2017 <strong>eVeg</strong> - Organic Green Store</p>
        </footer>
    )
};

export default Footer;
