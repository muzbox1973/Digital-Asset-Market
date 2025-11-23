import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import Button from './ui/Button';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            5,000명 이상의 개발자가 선택한 리소스
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
            더 이상 바닥부터 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-violet-400 to-brand-accent">
              코딩하지 마세요
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            검증된 코드 스니펫과 노션 템플릿으로 실무 시간을 50% 단축하세요.<br />
            주니어 개발자와 1인 크리에이터를 위한 프리미엄 디지털 자산 마켓.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              인기 리소스 둘러보기
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              <Terminal size={20} className="mr-2" />
              크리에이터 등록하기
            </Button>
          </div>
        </div>

        {/* Code Preview Decoration */}
        <div className="mt-20 relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-brand-dark/50 backdrop-blur-sm">
          <div className="flex items-center px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 px-3 py-1 bg-slate-900/50 rounded-md text-xs text-slate-400 font-mono">
              launch-saas-kit.tsx
            </div>
          </div>
          <div className="p-6 overflow-x-auto font-mono text-sm text-slate-300 leading-relaxed bg-[#0f172a]">
            <span className="text-purple-400">import</span> <span className="text-blue-400">{`{ SaasStarter }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@dev-store/kit'</span>;<br /><br />
            <span className="text-purple-400">export default</span> <span className="text-purple-400">function</span> <span className="text-yellow-300">App</span>() {`{`}<br />
            &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-300">SaasStarter</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">auth</span>=<span className="text-blue-400">{`{true}`}</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">payment</span>=<span className="text-green-400">"stripe"</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">database</span>=<span className="text-green-400">"supabase"</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">theme</span>=<span className="text-green-400">"dark"</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
            &nbsp;&nbsp;);<br />
            {`}`}
          </div>
          {/* Overlay Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;