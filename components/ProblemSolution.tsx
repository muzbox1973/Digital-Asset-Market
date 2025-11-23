import React from 'react';
import { XCircle, CheckCircle2, Clock, Calendar } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            반복되는 작업, <span className="text-red-400 decoration-red-400 underline decoration-wavy underline-offset-4">이제 그만.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            개발자의 시간은 코딩 그 이상의 가치 창출에 쓰여야 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-400 group-hover:scale-110 transition-transform">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    매번 새로 만드는 어드민
                    <XCircle size={18} className="text-red-500 ml-2" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    로그인, 회원가입, 테이블, 모달... <br />
                    프로젝트마다 똑같은 UI를 처음부터 다시 코딩하고 계신가요?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-400 group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    정리되지 않는 일정 관리
                    <XCircle size={18} className="text-red-500 ml-2" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    여기저기 흩어진 투두리스트와 노션 페이지.<br />
                    체계 없는 관리로 마감일에 쫓기는 스트레스를 받고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column (Highlight) */}
          <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/5 rounded-3xl p-1 border border-brand-primary/30 relative overflow-hidden">
             {/* Glass Effect Content */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-[20px] h-full p-8 flex flex-col justify-center relative z-10">
              <div className="mb-6">
                <span className="text-brand-accent font-bold tracking-wider text-sm uppercase">The Solution</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  복사, 붙여넣기, <br/>
                  <span className="text-brand-primary">단 5분이면 충분합니다.</span>
                </h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="text-brand-primary mr-3 shrink-0" size={20} />
                  <span>검증된 클린 코드 아키텍처</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="text-brand-primary mr-3 shrink-0" size={20} />
                  <span>실무에서 바로 사용 가능한 반응형 UI</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="text-brand-primary mr-3 shrink-0" size={20} />
                  <span>당신의 시간을 창조적인 일에 투자하세요</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;