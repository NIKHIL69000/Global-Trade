import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1000&auto=format&fit=crop" 
                alt="Container Terminal" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1000&auto=format&fit=crop" 
                alt="Fresh Produce" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Global Expertise, Local Integrity</h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Founded on the principles of reliability and quality, GlobalTrade Logistics has evolved into a premier player in the international trade sector. With over 15 years of experience, we bridge the gap between farmers, manufacturers, and global markets.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our commitment goes beyond simple transactions. We build sustainable supply chains that ensure fair trade for producers and premium quality for our clients. Whether it's sourcing exotic fruits from South America or exporting grains to Asia, we handle every step with precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-lg mr-4 text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Quality Assurance</h4>
                  <p className="text-sm text-slate-500">Rigorous checks at every stage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-lg mr-4 text-emerald-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Ethical Sourcing</h4>
                  <p className="text-sm text-slate-500">Supporting sustainable practices.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-lg mr-4 text-emerald-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Expert Team</h4>
                  <p className="text-sm text-slate-500">Logistics specialists at your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;