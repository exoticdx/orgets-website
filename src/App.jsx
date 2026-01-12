import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';
import RequestQuoteForm from './components/sections/RequestQuoteForm';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import './App.css';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    return (
        <div className="app">
            <ScrollToTop />
            <Layout onOpenQuote={() => setIsQuoteOpen(true)}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail onOpenQuote={() => setIsQuoteOpen(true)} />} />
                    <Route path="/category/:categoryId" element={<CategoryPage />} />
                </Routes>
            </Layout>

            <Modal
                isOpen={isQuoteOpen}
                onClose={() => setIsQuoteOpen(false)}
                title="Request a Quote"
            >
                <RequestQuoteForm onClose={() => setIsQuoteOpen(false)} />
            </Modal>
        </div>
    );
}

export default App;
