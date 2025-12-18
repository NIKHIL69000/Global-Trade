import React from 'react';
import { ClipboardCheck, Truck, Anchor, FileText, CheckCircle, Ship, Globe, DollarSign } from 'lucide-react';

const ProcessStep: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>;
  isLast?: boolean;
}> = ({ number, title, description, icon: Icon, isLast }) => (
  <div className="relative flex flex-col items-center text-center p-4">
    {!isLast && (
      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200 -z-10 transform translate-x-1/2"></div>
    )}
    <div className="w-20 h-20 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
      <Icon className="h-8 w-8 text-emerald-600" />
      <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
        {number}
      </div>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{description}</p>
  </div>
);

export const ImportProcess: React.FC = () => {
  return (
    <section id="import" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">How It Works</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Import Process</h2>
          <p className="mt-4 text-slate-600">Simplifying global sourcing for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <ProcessStep 
            number="1" 
            title="Product Sourcing" 
            description="We identify the best suppliers and negotiate competitive rates." 
            icon={Globe} 
          />
          <ProcessStep 
            number="2" 
            title="Quality Check" 
            description="Rigorous on-site inspections to ensure premium quality." 
            icon={ClipboardCheck} 
          />
          <ProcessStep 
            number="3" 
            title="Documentation" 
            description="Handling licenses, permits, and compliance paperwork." 
            icon={FileText} 
          />
          <ProcessStep 
            number="4" 
            title="Logistics" 
            description="Coordinating freight via sea or air with tracking updates." 
            icon={Ship} 
          />
          <ProcessStep 
            number="5" 
            title="Clearance & Delivery" 
            description="Customs clearance and final delivery to your warehouse." 
            icon={Truck} 
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export const ExportProcess: React.FC = () => {
  return (
    <section id="export" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Our Workflow</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Export Process</h2>
          <p className="mt-4 text-slate-600">Taking local products to the global stage.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between relative">
           <div className="lg:absolute lg:top-1/2 lg:left-0 lg:w-full lg:h-1 bg-slate-100 -z-10 transform -translate-y-1/2 hidden lg:block rounded"></div>
           
           {[
             { title: "Enquiry & Quote", desc: "Client sends requirements; we provide a competitive quote.", icon: DollarSign },
             { title: "Confirmation", desc: "Order details finalized and payment terms agreed.", icon: CheckCircle },
             { title: "Packaging", desc: "Goods packed according to international safety standards.", icon: ClipboardCheck },
             { title: "Documentation", desc: "Export declarations, BL, and Certificates of Origin issued.", icon: FileText },
             { title: "Shipping", desc: "Cargo loaded and shipped to destination port.", icon: Anchor }
           ].map((step, idx) => (
             <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center lg:w-1/5 z-10">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                  <step.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
