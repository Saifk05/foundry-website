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
      image:
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85'
    },
    {
      number: '02',
      title: 'Agricultural Castings',
      subtitle:
        'Durable cast components designed for agricultural machinery and demanding field conditions.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85'
    },
    {
      number: '03',
      title: 'Infrastructure Castings',
      subtitle:
        'Heavy-duty cast solutions engineered for infrastructure, utilities and industrial systems.',
      image:
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85'
    },
    {
      number: '04',
      title: 'Engineering Castings',
      subtitle:
        'Custom engineered cast components manufactured around customer drawings and specifications.',
      image:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=85'
    }
  ];

}