import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-logo">Orgets</h3>
                        <p className="footer-tagline">Premium Organic Exports from India to the World.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Our Products</a></li>
                            <li><a href="#sourcing">Sourcing</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#jaggery">Organic Jaggery</a></li>
                            <li><a href="#moringa">Moringa Powder</a></li>
                            <li><a href="#neem">Neem Powder</a></li>
                            <li><a href="#cow-dung">Cow Dung</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul className="contact-list">
                            <li>
                                <Mail size={16} />
                                <span>exports@orgets.com</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Orgets Exports. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
