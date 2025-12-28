import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';
import RequestQuoteForm from './components/sections/RequestQuoteForm';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);

    return (
        <div className="app">
            <ScrollToTop />
            <Navbar onOpenQuote={openQuoteModal} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>
            <Footer />

            <Modal
                isOpen={isQuoteModalOpen}
                onClose={closeQuoteModal}
                title="Request a Quote"
            >
                <RequestQuoteForm onClose={closeQuoteModal} />
            </Modal>
        </div>
    );
}

export default App;
