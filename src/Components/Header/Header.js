import React from 'react'
import './Header.css'
import Typical from 'react-typical'
import profileImg from '../../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <h1 > Hy! Am</h1>
                <h2 className='fullname'>Sudharsanan</h2>
                <h2>
                    I'm a{' '}
                    <Typical
                        steps={
                            [
                                'Full stack Developer ✌️',
                                1000,
                                'Front End Developer ✽',
                                1000,
                                'Back End Developer ✔️',
                                1000,
                                '.NET Developer 💯',
                                1000
                            ]
                        }
                        loop={Infinity}
                        wrapper='b'
                    />

                </h2>
                <p>
                    As a Software Engineer with experience in C#, HTML, CSS, JavaScript, React and Mongo DB, I aim to leverage my skills to
                    contribute to innovative projects and deliver high-quality software solutions. My goal is to work in a
                    collaborative team environment that fosters continuous learning and professional growth.
                </p>
                {/* <div className='header-payment-container'>
                    <i className='fa-brands fa-paypal'></i>
                    <i className='fa-brands fa-cc-visa'></i>
                    <i className='fa-brands fa-cc-mastercard'></i>
                    <i className='fa-brands fa-cc-amex'></i>
                    
                </div> */}
                <div className='header-payment-container'>
                    <FontAwesomeIcon icon={faPaypal} className='fa-brands-paypal' />
                    <FontAwesomeIcon icon={faCcVisa} className='fa-brands-visa' />
                    <FontAwesomeIcon icon={faCcMastercard} className='fa-brands-mastercard' />
                    <FontAwesomeIcon icon={faCcAmex} className='fa-brands-amex' />
                </div>
                <div className="profile-img-container">
                    <img
                        src={profileImg} alt='profile image'
                    />
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Header