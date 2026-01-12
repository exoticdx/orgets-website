import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import '../components/sections/ProductCatalog.css';

const CategoryPage = () => {
    const { categoryId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId]);

    // Map categoryId to display name and tag filter
    const getCategoryDetails = (id) => {
        switch (id) {
            case 'fruit-powder':
                return { title: 'Fruit Powders', tag: 'Fruit Powder' };
            case 'vegetable-powder':
                return { title: 'Vegetable Powders', tag: 'Vegetable Powder' };
            case 'natural-sweetener':
                return { title: 'Natural Sweeteners', tag: 'Natural Sweetener' };
            default:
                return { title: 'Products', tag: '' };
        }
    };

    const { title, tag } = getCategoryDetails(categoryId);

    const categoryProducts = products.filter(p => p.tag === tag);

    return (
        <>
            <Helmet>
                <title>{title} - Orgets</title>
                <meta name="description" content={`Explore our premium range of ${title}.`} />
            </Helmet>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{title}</h1>
                </div>
            </div>
            <section className="products-section">
                <div className="container">
                    {categoryProducts.length > 0 ? (
                        <div className="products-grid">
                            {categoryProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default CategoryPage;
