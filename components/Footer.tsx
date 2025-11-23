import React from 'react';
import { Code2, Github, Twitter, Instagram } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                <Code2 size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">DevStore</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              주니어 개발자와 1인 크리에이터를 위한<br/>
              프리미엄 디지털 자산 마켓플레이스.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">템플릿</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">UI 키트</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">아이콘 팩</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">가격 정책</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">소개</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">블로그</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">채용</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">제휴 문의</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-xs mb-4">새로운 템플릿 출시 소식을 가장 먼저 받아보세요.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:border-brand-primary"
              />
              <Button variant="primary" size="sm">구독</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-xs">
            © 2024 Digital Asset Market. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-slate-400">이용약관</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-slate-400">개인정보처리방침</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;