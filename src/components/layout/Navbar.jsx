import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenQuote }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text">Orgets</span>
                </div>

                <div className="navbar-links desktop-only">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#products" className="nav-link">Our Products</a>
                    <a href="#sourcing" className="nav-link">Sourcing</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div className="navbar-actions desktop-only">
                    <button className="btn btn-primary" onClick={onOpenQuote}>Request Quote</button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Our Products</a>
                        <a href="#sourcing" onClick={() => setIsMobileMenuOpen(false)}>Sourcing</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                        <button className="btn btn-primary full-width" onClick={() => {
                            setIsMobileMenuOpen(false);
                            onOpenQuote();
                        }}>Request Quote</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
