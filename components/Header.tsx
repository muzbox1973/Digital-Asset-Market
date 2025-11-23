import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Code2 } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'glass-nav border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
              <Code2 size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              DevStore
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">템플릿</a>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">기능</a>
            <a href="#reviews" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">후기</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">로그인</Button>
            <Button variant="primary" size="sm">
              <ShoppingBag size={16} className="mr-2" />
              시작하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-2xl">
          <a href="#products" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>템플릿</a>
          <a href="#features" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>기능</a>
          <a href="#reviews" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>후기</a>
          <hr className="border-slate-800" />
          <div className="flex flex-col space-y-3">
            <Button variant="ghost" className="justify-start" onClick={() => setIsMobileMenuOpen(false)}>로그인</Button>
            <Button variant="primary" onClick={() => setIsMobileMenuOpen(false)}>시작하기</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;