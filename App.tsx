import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductGrid />
        <Features />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;