import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center">
    <svg
      width="32"
      height="32"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-brand-gold"
    >
      <path
        d="M200 350C282.843 350 350 282.843 350 200C350 117.157 282.843 50 200 50C117.157 50 50 117.157 50 200C50 282.843 117.157 350 200 350Z"
        stroke="currentColor"
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M350 200H250"
        stroke="currentColor"
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="390" cy="200" r="10" fill="currentColor" />
    </svg>
    <div className="ml-2 flex flex-col items-start">
      <span className="text-white font-bold text-lg tracking-wider">CERTI</span>
      <span className="text-white font-light text-base tracking-wide -mt-1">homes</span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white py-20 border-t border-white/5">
      <div className="content-container max-w-[960px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/70">Revolutionizing home buying with AI-powered certification and transparency.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#benefits" className="text-white/70 hover:text-brand-gold transition-colors">Benefits</a></li>
              <li><a href="#process" className="text-white/70 hover:text-brand-gold transition-colors">Our Process</a></li>
              <li><a href="#sellers" className="text-white/70 hover:text-brand-gold transition-colors">For Sellers</a></li>
              <li><a href="#assurance" className="text-white/70 hover:text-brand-gold transition-colors">Assurance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/70">
                <Mail className="h-4 w-4 mr-2" />
                info@certihomes.ai
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">Stay updated with our latest properties and AI insights.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl placeholder:text-white/30 focus:outline-none focus:border-brand-gold/30 transition-colors"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto group bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-white/40">
          <p>&copy; {new Date().getFullYear()} CertiHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}