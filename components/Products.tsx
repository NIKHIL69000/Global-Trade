import React, { useState } from 'react';
import { Product } from '../types';
import { X, CheckCircle, Package, Calendar, Award } from 'lucide-react';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Cavendish Bananas',
    category: 'Fresh Fruits',
    origin: 'Ecuador',
    packaging: '18.14kg Box',
    description: 'High-quality Cavendish bananas, carefully selected for size and sweetness. Perfect for retail and wholesale distribution.',
    standards: 'Class A, GlobalGAP Certified',
    shelfLife: '3-4 Weeks (Controlled Atmosphere)',
    certifications: ['GlobalGAP', 'Rainforest Alliance', 'Organic'],
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p2',
    name: 'Hass Avocados',
    category: 'Fresh Fruits',
    origin: 'Mexico',
    packaging: '4kg / 10kg Carton',
    description: 'Creamy, rich-textured Hass avocados with excellent oil content. Harvested at peak maturity for optimal ripening.',
    standards: 'Premium Export Grade',
    shelfLife: '2-3 Weeks',
    certifications: ['HACCP', 'Fair Trade'],
    imageUrl: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p3',
    name: 'Basmati Rice XL',
    category: 'Bulk Commodities',
    origin: 'India',
    packaging: '25kg / 50kg PP Bag',
    description: 'Extra long grain Basmati rice, aged for perfection. Distinct aroma and fluffy texture upon cooking.',
    standards: 'Grade A, Sortex Cleaned',
    shelfLife: '24 Months',
    certifications: ['ISO 22000', 'Halal'],
    imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p4',
    name: 'Arabica Coffee Beans',
    category: 'Dry Goods',
    origin: 'Brazil',
    packaging: '60kg Jute Bag',
    description: 'Green Arabica coffee beans, ideal for roasting. Balanced acidity with chocolate and nutty notes.',
    standards: 'Screen 16/18, NY 2/3',
    shelfLife: '12 Months',
    certifications: ['Rainforest Alliance', 'UTZ'],
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p5',
    name: 'Valencia Oranges',
    category: 'Fresh Fruits',
    origin: 'Spain',
    packaging: '15kg Telescopic Box',
    description: 'Juicy, sweet oranges perfect for juicing or fresh consumption. Bright orange color and thin skin.',
    standards: 'Cat 1, Caliber 48/56/64',
    shelfLife: '4-6 Weeks',
    certifications: ['GlobalGAP', 'IFS'],
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p7',
    name: 'Premium Wheat Grain',
    category: 'Bulk Commodities',
    origin: 'Ukraine',
    packaging: 'Bulk / 50kg Bags',
    description: 'High-protein milling wheat suitable for baking and food production. Cleaned and dried to international standards.',
    standards: 'Milling Grade A',
    shelfLife: '12-18 Months',
    certifications: ['ISO 22000', 'SGS Inspected'],
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p8',
    name: 'Dried Red Chillies',
    category: 'Dry Goods',
    origin: 'India',
    packaging: '10kg / 25kg Jute Bag',
    description: 'Sun-dried red chillies with intense heat and vibrant color. Perfect for spice blends and culinary use.',
    standards: 'Stemless, S17 Teja',
    shelfLife: '12 Months',
    certifications: ['Spices Board India', 'HACCP'],
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p11',
    name: 'Red Onions',
    category: 'Vegetables',
    origin: 'India',
    packaging: '10kg / 25kg Mesh Bag',
    description: 'Firm, pungent red onions with deep purple skin. Carefully cured to ensure long transit life.',
    standards: 'Size 45mm+, Sortex',
    shelfLife: '2-3 Months (Ventilated)',
    certifications: ['GlobalGAP', 'Agmark'],
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=1000'
  }
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Our Catalog</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Premium Global Products</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Browse our selection of high-quality agricultural products and commodities available for export.
          </p>
        </div>

        {/* Categories (Simplified for UI) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Fresh Fruits', 'Vegetables', 'Bulk Commodities', 'Dry Goods'].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{product.name}</h3>
                </div>
                <p className="text-sm text-slate-500 mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                  Origin: {product.origin}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <button 
                    onClick={() => openModal(product)}
                    className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 hover:underline"
                  >
                    View Details
                  </button>
                  <button 
                     onClick={() => {
                       const contactSection = document.getElementById('contact');
                       contactSection?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
            >
              <X className="h-6 w-6 text-slate-600" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-10">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4">
                  {selectedProduct.category}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-slate-500 mb-6 flex items-center">
                  Origin: <span className="font-semibold text-slate-700 ml-1">{selectedProduct.origin}</span>
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Packaging</h4>
                      <p className="text-sm text-slate-600">{selectedProduct.packaging}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Quality Standards</h4>
                      <p className="text-sm text-slate-600">{selectedProduct.standards}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Shelf Life</h4>
                      <p className="text-sm text-slate-600">{selectedProduct.shelfLife}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Certifications</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedProduct.certifications.map((cert, idx) => (
                          <span key={idx} className="text-xs border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                   <button 
                     onClick={() => {
                       closeModal();
                       const contactSection = document.getElementById('contact');
                       setTimeout(() => contactSection?.scrollIntoView({ behavior: 'smooth' }), 100);
                     }}
                     className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;