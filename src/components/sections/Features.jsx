import React from 'react';
import { Sprout, Award, Globe } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Sprout size={40} />,
        title: 'Direct from Farmers',
        description: 'We source directly from certified organic farms, ensuring fair trade and premium quality.'
    },
    {
        icon: <Award size={40} />,
        title: 'Certified Organic',
        description: '100% organic certified products meeting international export standards.'
    },
    {
        icon: <Globe size={40} />,
        title: 'Global Logistics',
        description: 'Seamless export and shipping solutions to deliver fresh products worldwide.'
    }
];

const Features = () => {
    return (
        <section className="features-section" id="why-orgets">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
