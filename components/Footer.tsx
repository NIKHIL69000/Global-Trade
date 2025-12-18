import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="h-6 w-6 text-emerald-500 mr-2" />
              <span className="text-xl font-bold">GlobalTrade</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Connecting markets worldwide with premium agricultural products and reliable logistics. Your trusted partner in international trade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-emerald-500 transition-colors">Our Products</a></li>
              <li><a href="#global" className="hover:text-emerald-500 transition-colors">Global Reach</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Import & Sourcing</li>
              <li>Export Management</li>
              <li>Quality Inspection</li>
              <li>Logistics Coordination</li>
              <li>Customs Clearance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <span>123 Trade Avenue, Financial District,<br/>Singapore 048624</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <span>+65 6789 0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <span>contact@globaltrade-logistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GlobalTrade Logistics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
