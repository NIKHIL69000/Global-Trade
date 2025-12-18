import React from 'react';
import { Globe, Truck, FileCheck, Anchor, Search, PackageCheck } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 's1',
    title: 'Global Sourcing',
    description: 'We identify and procure high-quality products from trusted suppliers worldwide.',
    icon: Globe
  },
  {
    id: 's2',
    title: 'Import Services',
    description: 'End-to-end handling of imports, ensuring timely delivery and cost efficiency.',
    icon: Anchor
  },
  {
    id: 's3',
    title: 'Export Management',
    description: 'Expanding your market reach by managing the complexities of international export.',
    icon: Truck
  },
  {
    id: 's4',
    title: 'Quality Inspection',
    description: 'Strict quality control measures to ensure products meet international standards.',
    icon: Search
  },
  {
    id: 's5',
    title: 'Documentation',
    description: 'Handling all necessary customs paperwork, certificates, and compliance documents.',
    icon: FileCheck
  },
  {
    id: 's6',
    title: 'Bulk Supply',
    description: 'Reliable supply of bulk commodities for industrial and commercial needs.',
    icon: PackageCheck
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">What We Do</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Trade Solutions</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From sourcing to delivery, we provide a full spectrum of services designed to streamline your supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
