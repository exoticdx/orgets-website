import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProductCatalog.css';

const products = [
    {
        id: 'jaggery',
        name: 'Organic Jaggery',
        tag: 'Natural Sweetener',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Organic+Jaggery',
        description: 'Pure, chemical-free jaggery sourced from traditional farms.'
    },
    {
        id: 'moringa',
        name: 'Moringa Powder',
        tag: 'Superfood',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Moringa+Powder',
        description: 'Nutrient-rich moringa leaf powder, perfect for supplements.'
    },
    {
        id: 'neem',
        name: 'Neem Powder',
        tag: 'Herbal & Medicinal',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Neem+Powder',
        description: 'Premium quality neem powder for pharmaceutical and cosmetic use.'
    },
    {
        id: 'cow-dung',
        name: 'Cow Dung',
        tag: 'Fertilizer & Religious',
        image: 'https://placehold.co/600x400/f3f4f6/005826?text=Cow+Dung',
        description: 'Dried and processed cow dung for agricultural and religious purposes.'
    }
];

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
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <span className="product-tag">{product.tag}</span>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <button className="btn-link">
                                    View Specs <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
