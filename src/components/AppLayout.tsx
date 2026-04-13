import React from 'react';
import Navbar from './landing/Navbar';
import HeroSection from './landing/HeroSection';
import AboutSection from './landing/AboutSection';
import ServicesSection from './landing/ServicesSection';
import WhyChooseUs from './landing/WhyChooseUs';
import GallerySection from './landing/GallerySection';
import WhatsAppCTA from './landing/WhatsAppCTA';
import ContactSection from './landing/ContactSection';
import Footer from './landing/Footer';
import FloatingWhatsApp from './landing/FloatingWhatsApp';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <WhatsAppCTA />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AppLayout;