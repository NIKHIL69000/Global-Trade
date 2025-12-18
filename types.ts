import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string;
  packaging: string;
  description: string;
  standards: string;
  shelfLife: string;
  certifications: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}