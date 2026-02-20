import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaStrava, FaEnvelope, FaPhone, FaYoutube } from 'react-icons/fa';
import  logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <div className="footer-logo">
                        <div className="footer-logo">
                            <img src={logo} alt="Штипски Маратон Лого" className="footer-image-logo" />
                        </div>
                    </div>
                    <p>Биди дел од најголемиот спортски настан во Македонија. Трчај за себе, трчај за Штип!</p>
                </div>
                <div className="footer-section map-container">
                    <h3>Локација на старт</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3344605929235!2d22.1884443!3d41.7348988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1355db0055555555%3A0xc3f9865f3a09e1e1!2sShtip%2C%20North%20Macedonia!5e0!3m2!1sen!2s!4v1700000000000" 
                        width="100%" 
                        height="150" 
                        style={{ border: 0, borderRadius: "8px" }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="footer-section">
                    <h3>Контакт</h3>
                    <p><FaEnvelope /> info@stipskimaraton.com.mk</p>
                    <p><FaPhone /> +389 2 1234 567</p>
                </div>
                <div className="footer-section social-links">
                    <h3>Следи не</h3>
                    <div className="icons-wrapper">
                         <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                         <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                         <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Штипски Маратон. Сите права се задржани.</p>
                </div>
        </footer>
    );
};

export default Footer;