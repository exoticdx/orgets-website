import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <section className="trust-bar">
            <div className="container">
                <p className="trust-label">Trusted by Global Partners & Certified by</p>
                <div className="logos-grid">
                    {/* Placeholders for logos */}
                    <div className="trust-logo">ISO 9001</div>
                    <div className="trust-logo">APEDA</div>
                    <div className="trust-logo">Organic India</div>
                    <div className="trust-logo">FSSAI</div>
                    <div className="trust-logo">USDA Organic</div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
