import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            단순한 템플릿이 아닙니다.<br/>
            <span className="text-brand-primary">성공을 위한 시스템</span>입니다.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-surface p-6 rounded-xl border border-slate-800 hover:border-brand-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50%</div>
            <div className="text-sm text-slate-500">개발 시간 단축</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1.2k+</div>
            <div className="text-sm text-slate-500">활동 중인 크리에이터</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-sm text-slate-500">평균 만족도</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-slate-500">자동화된 수익 창출</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;