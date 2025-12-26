import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProductCatalog from './components/sections/ProductCatalog';
import Features from './components/sections/Features';
import TrustBar from './components/sections/TrustBar';
import Modal from './components/ui/Modal';
import RequestQuoteForm from './components/sections/RequestQuoteForm';
import './App.css';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenQuote={openQuoteModal} />
      <main>
        <Hero />
        <ProductCatalog />
        <Features />
        <TrustBar />
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
