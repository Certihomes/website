import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Benefits from './components/Benefits';
import Process from './components/Process';
import SellerSection from './components/SellerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Header />
      <main className="space-y-8 md:space-y-12">
        <Hero />
        <div className="px-4 sm:px-6 lg:px-8">
          <FeaturedProperties />
          <Benefits />
          <Process />
          <SellerSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;