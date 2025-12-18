import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Container Port Sunset" 
          className="w-full h-full object-cover"
        />
        {/* Adjusted overlay: Increased opacity (decreased transparency) to blend image and ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/85 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-900/30 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
            Global Trade Experts
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Connecting Markets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Delivering Quality
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Your trusted partner in global import and export. We specialize in sourcing premium agricultural products and navigating complex logistics to deliver excellence to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;