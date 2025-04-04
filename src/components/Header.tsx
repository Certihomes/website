import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center -ml-6">
    <img 
      src="/logo.svg" 
      alt="CertiHomes Logo" 
      className="h-24 md:h-28 w-auto"
      style={{ minWidth: '300px' }}
    />
  </div>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="absolute inset-0 bg-[#080808]/90 backdrop-blur-md"></div>
      <div className="max-w-[1200px] mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center group">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-white/70 hover:text-brand-gold transition-colors">Benefits</a>
            <a href="#process" className="text-white/70 hover:text-brand-gold transition-colors">Our Process</a>
            <a href="#sellers" className="text-white/70 hover:text-brand-gold transition-colors">For Sellers</a>
            <a href="#assurance" className="text-white/70 hover:text-brand-gold transition-colors">Assurance</a>
          </nav>
          
          <div className="hidden md:block">
            <button className="bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-blue px-6 py-2.5 rounded-xl font-medium transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#080808]/90 backdrop-blur-md z-20">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#benefits" className="text-white/70 hover:text-brand-gold transition-colors">Benefits</a>
              <a href="#process" className="text-white/70 hover:text-brand-gold transition-colors">Our Process</a>
              <a href="#sellers" className="text-white/70 hover:text-brand-gold transition-colors">For Sellers</a>
              <a href="#assurance" className="text-white/70 hover:text-brand-gold transition-colors">Assurance</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}