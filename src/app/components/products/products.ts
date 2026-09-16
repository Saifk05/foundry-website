import { Component } from '@angular/core';

interface ProductCategory {
  number: string;
  title: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

categories: ProductCategory[] = [
  {
    number: '01',
    title: 'Automotive Castings',
    subtitle:
      'Precision cast components engineered for demanding automotive and mobility applications.',
    image: 'https://images.unsplash.com/PHOTO_ID?w=1200&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Agricultural Castings',
    subtitle:
      'Durable cast components designed for agricultural machinery and demanding field conditions.',
    image: 'https://images.unsplash.com/PHOTO_ID?w=1200&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Infrastructure Castings',
    subtitle:
      'Heavy-duty cast solutions engineered for infrastructure, utilities and industrial systems.',
    image: 'https://images.unsplash.com/PHOTO_ID?w=1200&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Engineering Castings',
    subtitle:
      'Custom engineered cast components manufactured around customer drawings and specifications.',
    image: 'https://images.unsplash.com/PHOTO_ID?w=1200&auto=format&fit=crop'
  }
];

}