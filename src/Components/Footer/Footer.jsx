import React from 'react'
import './Footer.css'
import Email_icon from '../../assets/Email_icon.svg'
import linkedin_logo from '../../assets/linkedin_logo.svg'
const Footer = () => {
return(
    <div className = 'footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src=" "  alt=''/>
                <p>Copyright© 2023.  All rights reserved. </p>
            </div>
            <div className="footer-top-right">
                <img src = {Email_icon} alt=""/>
                <img src = {linkedin_logo} alt=""/>
            </div>
        </div>


    </div>
)
}

export default Footer