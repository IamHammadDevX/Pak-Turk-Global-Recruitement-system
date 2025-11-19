import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  category: string;
  items: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface WorkerCategory {
  id: string;
  title: string;
  image: string;
  description: string;
}