import React from 'react';
import { Clipboard, Search, Award, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: Clipboard,
    title: "Schedule Inspection",
    description: "Book a comprehensive property inspection with our certified professionals."
  },
  {
    icon: Search,
    title: "Thorough Assessment",
    description: "Our experts conduct a detailed evaluation of your property's condition."
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Receive official CertiHomes certification upon meeting our standards."
  },
  {
    icon: BadgeCheck,
    title: "List Your Home",
    description: "Feature your certified property to qualified buyers on our platform."
  }
];

export default function CertificationSteps() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          <div className="bg-brand-gold/20 p-4 rounded-full mb-4 group-hover:bg-brand-gold/30 transition-all duration-300">
            <step.icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
            {step.title}
          </h3>
          <p className="text-white/80">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}