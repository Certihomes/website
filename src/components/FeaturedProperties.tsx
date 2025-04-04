import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    address: "1234 Maple Avenue",
    city: "Beverly Hills",
    state: "CA",
    zip: "90210",
    price: "$2,450,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    certScore: 98
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    address: "567 Oak Lane",
    city: "Santa Monica",
    state: "CA",
    zip: "90402",
    price: "$1,895,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,800",
    certScore: 95
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    address: "890 Pine Street",
    city: "Pacific Palisades",
    state: "CA",
    zip: "90272",
    price: "$3,150,000",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    certScore: 97
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    address: "123 Palm Drive",
    city: "Malibu",
    state: "CA",
    zip: "90265",
    price: "$4,750,000",
    beds: 6,
    baths: 5.5,
    sqft: "5,500",
    certScore: 99
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-12 md:py-16 bg-[#080808]">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="group relative">
              {/* Property Card */}
              <div className="relative bg-white/[0.03] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-gold/30 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.address}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Certification Badge */}
                  <div className="absolute top-4 right-4 bg-brand-gold/90 backdrop-blur-sm text-brand-blue px-3 py-1.5 rounded-lg font-medium text-sm flex items-center gap-1.5">
                    <Shield className="w-4 h-4" />
                    <span>CERT {property.certScore}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-white font-medium mb-1 group-hover:text-brand-gold transition-colors">
                      {property.address}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {property.city}, {property.state} {property.zip}
                    </p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-brand-gold font-medium text-lg">
                        {property.price}
                      </p>
                      <p className="text-white/60 text-sm">
                        {property.beds} beds • {property.baths} baths • {property.sqft} sqft
                      </p>
                    </div>
                    <button className="text-brand-gold hover:text-brand-gold/80 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* View Report Button - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                  <button className="bg-brand-gold text-brand-blue px-6 py-3 rounded-xl font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                    View Full Report
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}