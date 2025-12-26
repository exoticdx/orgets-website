import React, { useState } from 'react';
import './RequestQuoteForm.css';

const RequestQuoteForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        alert('Thank you! We will get back to you shortly.');
        onClose();
    };

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Orgets Imports Ltd."
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="product">Interested Product</label>
                    <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                    >
                        <option value="">Select Product</option>
                        <option value="Jaggery">Organic Jaggery</option>
                        <option value="Moringa">Moringa Powder</option>
                        <option value="Neem">Neem Powder</option>
                        <option value="Cow Dung">Cow Dung</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity (kg/tons)</label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 kg"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements..."
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary full-width">
                Send Request
            </button>
        </form>
    );
};

export default RequestQuoteForm;
