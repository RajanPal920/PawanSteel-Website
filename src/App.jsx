import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';
import FloatingActions from './components/FloatingActions';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MaterialsPage from './pages/MaterialsPage';
import MaterialDetailPage from './pages/MaterialDetailPage';
import CertificatePage from './pages/CertificatePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [quoteModalState, setQuoteModalState] = useState({
    isOpen: false,
    initialProduct: '',
    initialCategory: '',
    initialMaterial: '',
  });

  const handleOpenQuoteModal = (product = '', category = '', material = '') => {
    setQuoteModalState({
      isOpen: true,
      initialProduct: product,
      initialCategory: category,
      initialMaterial: material,
    });
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F7FB] text-[#172033] font-sans antialiased selection:bg-[#D71932] selection:text-white">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global Header with Mega Menus */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products/:slug" element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/materials" element={<MaterialsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/materials/:slug" element={<MaterialDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer with Sunmarg India Credit */}
      <Footer />

      {/* Global Floating Action Buttons: Call & WhatsApp */}
      <FloatingActions />

      {/* Global Interactive Quote Modal */}
      <InquiryModal
        isOpen={quoteModalState.isOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={quoteModalState.initialProduct}
        initialCategory={quoteModalState.initialCategory}
        initialMaterial={quoteModalState.initialMaterial}
      />
    </div>
  );
}
