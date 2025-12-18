import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Start Your Trade Journey</h2>
          <p className="mt-4 text-slate-600">Send us your requirements or questions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Ready to discuss your import/export needs? Our team is here to provide you with expert guidance and competitive quotes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-400">+65 6789 0123</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-400">sales@globaltrade-logistics.com</p>
                    <p className="text-slate-400">support@globaltrade-logistics.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Office</p>
                    <p className="text-slate-400">123 Trade Avenue, Financial District</p>
                    <p className="text-slate-400">Singapore 048624</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               {/* Decorative circle */}
               <div className="w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl absolute bottom-10 left-10"></div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Company Ltd" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">Interested In</label>
                <select id="interest" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
                  <option>Importing Products</option>
                  <option>Exporting Goods</option>
                  <option>Logistics Services</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-emerald-500/30">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
