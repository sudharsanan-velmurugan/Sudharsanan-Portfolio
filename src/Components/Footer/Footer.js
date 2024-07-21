import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-copyright">
                <p>
                    2024 © Sudharsanan, All Rght reserved
                </p>
            </div>
            <ul className='footer-social-media'>
                <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer