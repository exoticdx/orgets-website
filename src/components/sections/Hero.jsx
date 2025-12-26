import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-title"
                    >
                        Premium Organic Exports from <span className="highlight">India</span> to the World.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Sourcing the finest Jaggery, Moringa, Neem, and more directly from certified farmers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hero-actions"
                    >
                        <button className="btn btn-primary">
                            Explore Products <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn btn-outline">
                            Sourcing Process
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-image-wrapper"
                >
                    <img src={heroBg} alt="Organic Spices and Nature" className="hero-image" />
                    <div className="hero-shape"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
