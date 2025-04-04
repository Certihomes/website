import React from 'react';
import { MapPin, Search } from 'lucide-react';

export default function PropertySearch() {
  return (
    <div className="relative w-full max-w-3xl">
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-brand-gold/5">
        <h2 className="text-2xl font-bold text-white mb-4">Find Your Certified Home</h2>
        
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <MapPin className="h-6 w-6 text-white/40" />
          </div>
          <input
            type="text"
            placeholder="Enter location or ZIP code"
            className="w-full bg-white/[0.05] border-2 border-white/10 rounded-xl px-12 py-4 text-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold/30 transition-all"
          />
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}