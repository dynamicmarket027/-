export interface Product {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  imageId: string;
  cta?: string;
  disabled?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
