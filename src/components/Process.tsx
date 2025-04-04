import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionDivider from './SectionDivider';

const steps = [
  {
    number: "01",
    title: "Get Prequalified",
    description: "Understand your budget clearly with our AI-powered preapproval process."
  },
  {
    number: "02",
    title: "Browse Certified Homes",
    description: "Explore our curated selection of thoroughly vetted and certified properties."
  },
  {
    number: "03",
    title: "Review Detailed Reports",
    description: "Access comprehensive AI-generated inspection reports for complete transparency."
  },
  {
    number: "04",
    title: "Move with Confidence",
    description: "Close on your dream home knowing you're protected by our smart guarantees."
  }
];

export default function Process() {
  return (
    <section id="process" className="relative">
      <SectionDivider />
      <div className="section-padding bg-[#080808]">
        <div className="content-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="animate-pulse w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-white/70 text-sm">Smart Process</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Your Journey to Home Ownership</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto">Four simple steps powered by advanced AI technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-500">
                  <span className="text-4xl font-bold text-brand-gold mb-6 block">{step.number}</span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 text-brand-gold" />
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-gold/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionDivider orientation="bottom" />
    </section>
  );
}