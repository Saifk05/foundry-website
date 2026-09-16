import { Component } from '@angular/core';

interface Facility {
  number: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [],
  templateUrl: './infrastructure.html',
  styleUrl: './infrastructure.scss'
})
export class Infrastructure {

  facilities: Facility[] = [
    {
      number: '01',
      title: 'Melting Facility',
      description:
        'Controlled melting infrastructure designed for consistent metallurgy and dependable production.',
      image:
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85'
    },
    {
      number: '02',
      title: 'Moulding & Production',
      description:
        'Production systems focused on repeatability, process control and efficient manufacturing.',
      image:
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85'
    },
    {
      number: '03',
      title: 'Precision Machining',
      description:
        'Machining capability supporting dimensional accuracy and production-ready cast components.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85'
    }
  ];

}