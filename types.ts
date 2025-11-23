import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatarUrl: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}