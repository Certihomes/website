import React from 'react';
import { Wallet, ClipboardCheck, Award, Clock, Shield } from 'lucide-react';
import SectionDivider from './SectionDivider';

const benefits = [
  {
    icon: Wallet,
    title: "Prequalified Buyers",
    description: "Get clear on your budget from the start with our simple, user-friendly preapproval process."
  },
  {
    icon: ClipboardCheck,
    title: "Thorough Inspections",
    description: "Move in with total peace of mind thanks to our comprehensive, standardized property reports."
  },
  {
    icon: Award,
    title: "Certified Properties",
    description: "Every home meets strict certification criteria, ensuring it's completely move-in ready."
  },
  {
    icon: Clock,
    title: "Streamlined Process",
    description: "Save time and stress with our concierge-style approach guiding you at each milestone."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative">
      <SectionDivider />
      <div className="section-padding bg-[#080808]">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">
              Why Choose CertiHomes
            </h2>
            <p className="text-lg text-white/70 max-w-[600px] mx-auto">
              Experience the difference of buying with complete confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group h-[240px] relative p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 border border-white/10 hover:border-brand-gold/30"
              >
                <div className="flex-1">
                  <div className="p-2 rounded-lg bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300 mb-4 inline-block">
                    <benefit.icon className="h-6 w-6 text-brand-gold" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[600px] mx-auto">
            <div className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-lg bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors mb-4">
                  <Shield className="h-8 w-8 text-brand-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
                  Worry-Free Assurance
                </h3>
                <p className="text-sm text-white/70">
                  Rest easy with our short-term buyback and coverage plans for unexpected issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider orientation="bottom" />
    </section>
  );
}