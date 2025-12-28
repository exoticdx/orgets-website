import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
            </div>
        );
    }

    const whatsappMessage = `Hi Orgets, I am interested in getting a quotation for *${product.name}*.`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Helmet>
                <title>{product.name} - Orgets Exports</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <div className="product-detail-page">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to Products
                    </Link>

                    <div className="product-detail-grid">
                        <div className="product-detail-image-wrapper">
                            <img src={product.image} alt={product.name} className="product-detail-image" />
                            <span className="product-detail-tag">{product.tag}</span>
                        </div>

                        <div className="product-detail-content">
                            <h1 className="product-detail-title">{product.name}</h1>
                            <p className="product-detail-description">{product.longDescription}</p>

                            <div className="product-specs">
                                <h3>Specifications</h3>
                                <ul>
                                    {product.specs.map((spec, index) => (
                                        <li key={index}>
                                            <CheckCircle size={16} className="spec-icon" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-actions">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp"
                                >
                                    <MessageCircle size={20} />
                                    Get Quotation on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
