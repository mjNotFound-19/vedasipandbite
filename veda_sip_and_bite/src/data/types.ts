export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  unitLabel: string;
  benefits: string[];
  ingredients: string[];
  brewingInstructions: string[];
  sourcingNote: string;
  caffeineFree: boolean;
  images: ProductImage[];
  isAvailable: boolean;
  checkoutUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string[];
  sections: Array<{ heading: string; body: string[] }>;
}

