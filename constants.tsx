import React from 'react';
import { Product, Review, FaqItem, Feature } from './types';
import { Zap, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

// Using picsum seeds to ensure consistent images related to tech vibes
export const IMAGES = {
  heroBg: "https://picsum.photos/seed/devhero/1600/900",
  productSaas: "https://picsum.photos/seed/dashboard1/800/600",
  productNotion: "https://picsum.photos/seed/planner/800/600",
  productLanding: "https://picsum.photos/seed/uiwebsite/800/600",
  avatar1: "https://picsum.photos/seed/user1/100/100",
  avatar2: "https://picsum.photos/seed/user2/100/100",
  avatar3: "https://picsum.photos/seed/user3/100/100",
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'SaaS 런칭 올인원 키트',
    description: 'Next.js 14 + Tailwind 보일러플레이트. 인증, 결제, DB 연동 완료.',
    price: 49000,
    imageUrl: IMAGES.productSaas,
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    isBestSeller: true
  },
  {
    id: 'p2',
    title: '프리랜서 개발자 노션 워크스페이스',
    description: '견적서, 일정, 클라이언트 관리 템플릿. 복잡한 엑셀에서 해방되세요.',
    price: 15000,
    imageUrl: IMAGES.productNotion,
    tags: ['Notion', 'Productivity'],
    isNew: true
  },
  {
    id: 'p3',
    title: '고성능 마케팅 랜딩페이지 UI',
    description: '전환율 20% 상승이 검증된 디자인 시스템 및 컴포넌트.',
    price: 29000,
    imageUrl: IMAGES.productLanding,
    tags: ['Figma', 'React', 'Tailwind']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '김개발',
    role: '3년차 프론트엔드',
    avatarUrl: IMAGES.avatar1,
    content: '이 템플릿 덕분에 외주 프로젝트 기간을 절반으로 줄였어요. 남는 시간에 제 사이드 프로젝트를 시작했습니다.',
    rating: 5
  },
  {
    id: 'r2',
    author: '이기획',
    role: '1인 창업가',
    avatarUrl: IMAGES.avatar2,
    content: '코드 퀄리티가 정말 깔끔합니다. 주석도 잘 달려있어서 수정하기 너무 편해요. 디자인 감각도 훌륭합니다.',
    rating: 5
  },
  {
    id: 'r3',
    author: '박디자인',
    role: 'UI/UX 디자이너',
    avatarUrl: IMAGES.avatar3,
    content: '개발자에게 디자인 전달할 때 이 키트를 참고하니 커뮤니케이션 비용이 확 줄었습니다. 강추합니다!',
    rating: 4
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '구매한 코드는 상업적으로 이용 가능한가요?',
    answer: '네, 모든 리소스는 상업적 프로젝트에 제한 없이 사용 가능합니다. 단, 소스 코드 자체를 재판매하거나 배포하는 행위는 금지됩니다.'
  },
  {
    question: '업데이트는 지원되나요?',
    answer: '주요 프레임워크 버전 업데이트 시 6개월간 무료 업데이트를 제공합니다. 구매 내역에서 언제든 최신 버전을 다운로드할 수 있습니다.'
  },
  {
    question: '환불 정책은 어떻게 되나요?',
    answer: '디지털 상품의 특성상 다운로드 후에는 환불이 불가능합니다. 구매 전 미리보기와 상세 설명을 충분히 확인해주세요.'
  },
  {
    question: '기술 지원이 포함되어 있나요?',
    answer: '코드 실행에 치명적인 오류가 있는 경우 이메일을 통해 지원해 드립니다. 다만, 개인적인 커스터마이징 요청은 포함되지 않습니다.'
  }
];

export const FEATURES: Feature[] = [
  {
    title: '개발 속도 2배 향상',
    description: '반복되는 보일러플레이트 코드를 제거하고 비즈니스 로직에 집중하세요.',
    icon: <Zap className="w-6 h-6 text-brand-accent" />
  },
  {
    title: '검증된 아키텍처',
    description: '대규모 트래픽을 처리할 수 있는 확장성 높은 폴더 구조와 패턴을 사용합니다.',
    icon: <Layers className="w-6 h-6 text-brand-primary" />
  },
  {
    title: '수익화 준비 완료',
    description: '결제 시스템부터 SEO 최적화까지, 돈을 벌기 위한 모든 기능이 탑재되어 있습니다.',
    icon: <TrendingUp className="w-6 h-6 text-green-400" />
  },
  {
    title: '평생 소장',
    description: '한 번 구매로 평생 소장하세요. 구독료 없는 영구 라이센스를 제공합니다.',
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />
  }
];