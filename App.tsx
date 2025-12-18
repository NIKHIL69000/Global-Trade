import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import { ImportProcess, ExportProcess } from './components/Process';
import GlobalReach from './components/GlobalReach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <ImportProcess />
        <ExportProcess />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
