import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import ProductCategorySection from '../components/sections/ProductCategorySection';
import Features from '../components/sections/Features';
import TrustBar from '../components/sections/TrustBar';
import { products } from '../data/products';

const Home = () => {
    // Filter products for each category (taking first 4)
    const fruitProducts = products.filter(p => p.tag === 'Fruit Powder').slice(0, 4);
    const vegetableProducts = products.filter(p => p.tag === 'Vegetable Powder').slice(0, 4);
    const sweetenerProducts = products.filter(p => p.tag === 'Natural Sweetener').slice(0, 4);

    return (
        <>
            <Helmet>
                <title>Orgets - Premium Organic Exports from India</title>
                <meta name="description" content="Exporting high-quality Organic Jaggery, Moringa, Neem, and more directly from Indian farmers to the world." />
            </Helmet>
            <Hero />

            <div id="products">
                <ProductCategorySection
                    title="Fruit Powders"
                    products={fruitProducts}
                    categoryId="fruit-powder"
                />
                <ProductCategorySection
                    title="Vegetable Powders"
                    products={vegetableProducts}
                    categoryId="vegetable-powder"
                />
                <ProductCategorySection
                    title="Natural Sweeteners"
                    products={sweetenerProducts}
                    categoryId="natural-sweetener"
                />
            </div>

            <Features />
            <TrustBar />
        </>
    );
};

export default Home;
