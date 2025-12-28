import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './ProductCatalog.css';

const ProductCatalog = () => {
    return (
        <section className="products-section" id="products">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Premium Exports</h2>
                    <p className="section-subtitle">Sourced directly from certified organic farms in India.</p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
                            <div className="product-card">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <span className="product-tag">{product.tag}</span>
                                </div>
                                <div className="product-content">
                                    <h3 className="product-title">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <span className="btn-link">
                                        View Specs <ArrowUpRight size={18} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
