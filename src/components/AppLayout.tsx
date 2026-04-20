import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

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
  useEffect(() => {
    // ✅ Inisialisasi Lenis dengan config yang lebih responsif
    const lenis = new Lenis({
      // ↓ Durasi lebih pendek = scroll lebih responsif (0.6-0.8 sweet spot)
      duration: 0.7,
      
      // ↓ Easing cubic ease-out: natural, tidak terlalu "berat"
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      
      // ↓ Kontrol interpolasi: 0.1 = smooth, 0.2 = lebih responsif
      lerp: 0.1,
      
      // ↓ Sensitivitas mouse wheel (1 = normal, >1 = lebih cepat)
      wheelMultiplier: 1,
      
      // ↓ Sensitivitas touch device (mobile butuh lebih sensitif)
      touchMultiplier: 2,
      
      // ↓ Aktifkan smooth scroll untuk mouse wheel
      smoothWheel: true,
      
      // ↓ Normalisasi perilaku wheel untuk konsistensi cross-browser
      normalizeWheel: true,
      
      // ↓ Nonaktifkan infinite scroll (kecuali memang dibutuhkan)
      infinite: false,
      
      // ↓ Opsional: prevent scroll di elemen tertentu
      // prevent: (node: Element) => node.hasAttribute('data-lenis-prevent'),
    });

    // ✅ Request Animation Frame loop untuk animasi smooth 60fps
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Opsional: Sync dengan scroll native untuk anchor links
    lenis.on('scroll', () => {
      // Bisa ditambah logic jika perlu trigger animasi saat scroll
    });

    // ✅ Cleanup saat komponen unmount (mencegah memory leak)
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden" 
      style={{ 
        fontFamily: '"Cormorant Garamond", serif',
        // ⚠️ Penting: Jangan pakai overflow-y: hidden/scroll di root
        // Lenis butuh scroll native di html/body untuk bekerja
        overflowY: 'visible',
      }}
    >
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