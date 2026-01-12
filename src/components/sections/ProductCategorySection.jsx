import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import './ProductCatalog.css'; // Reusing existing styles

const ProductCategorySection = ({ title, products, categoryId }) => {
    return (
        <section className="products-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{title}</h2>
                    <Link to={`/category/${categoryId}`} className="view-more-link">
                        View More <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategorySection;
