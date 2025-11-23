import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import Button from './ui/Button';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">이번 주 베스트셀러</h2>
            <p className="text-slate-400">검증된 퀄리티의 리소스를 만나보세요.</p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            전체 상품 보기
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative rounded-2xl overflow-hidden border border-slate-800 bg-brand-surface hover:border-brand-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 ${
                index === 0 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
              </div>

              {/* Badges */}
              <div className="absolute top-6 left-6 flex gap-2">
                {product.isBestSeller && (
                  <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30 backdrop-blur-md">
                    BEST SELLER
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-bold border border-brand-primary/30 backdrop-blur-md">
                    NEW
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col h-full justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-2 text-sm md:text-base">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-semibold text-white">
                        ₩{product.price.toLocaleString()}
                      </span>
                    </div>
                    <button className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-accent transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            전체 상품 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;