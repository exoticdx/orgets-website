import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import ProductCatalog from '../components/sections/ProductCatalog';
import Features from '../components/sections/Features';
import TrustBar from '../components/sections/TrustBar';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Orgets - Premium Organic Exports from India</title>
                <meta name="description" content="Exporting high-quality Organic Jaggery, Moringa, Neem, and more directly from Indian farmers to the world." />
            </Helmet>
            <Hero />
            <ProductCatalog />
            <Features />
            <TrustBar />
        </>
    );
};

export default Home;
