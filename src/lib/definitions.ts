import type { LucideIcon } from 'lucide-react';
import React from 'react';

export type Product = {
  name: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

export type JourneyStep = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type WellnessItem = {
  title: string;
  content: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type DetailedProduct = {
    title?: string;
    description?: string;
    subItems?: string[];
}

export type DetailedProductCategory = {
    title: string;
    description: string;
    items: DetailedProduct[];
}
