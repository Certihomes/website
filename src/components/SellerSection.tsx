import React from 'react';
import CertificationSteps from './CertificationSteps';
import { ArrowRight } from 'lucide-react';
import SectionDivider from './SectionDivider';

export default function SellerSection() {
  return (
    <section id="sellers" className="relative">
      <SectionDivider />
      <div className="section-padding bg-[#080808]">
        <div className="content-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="animate-pulse w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-white/70 text-sm">For Property Owners</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Certify Your Property</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stand out in the market with our AI-powered certification. Attract serious buyers 
              and sell faster with complete transparency.
            </p>
          </div>

          <CertificationSteps />

          <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-8 py-4 rounded-2xl font-medium transition-all">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      <SectionDivider orientation="bottom" />
    </section>
  );
}