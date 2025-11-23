import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
       <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            이미 <span className="text-brand-accent">1,200명</span>의 크리에이터가 <br className="md:hidden" />
            수익을 창출하고 있습니다.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-800 w-8 h-8" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-slate-700"} 
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed min-h-[80px]">
                "{review.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={review.avatarUrl} 
                  alt={review.author} 
                  className="w-10 h-10 rounded-full border-2 border-slate-800 mr-3 object-cover"
                />
                <div>
                  <div className="font-bold text-white text-sm">{review.author}</div>
                  <div className="text-xs text-slate-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;