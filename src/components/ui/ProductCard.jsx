import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../sections/ProductCatalog.css'; // Reusing existing styles for now

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card-link">
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
    );
};

export default ProductCard;
