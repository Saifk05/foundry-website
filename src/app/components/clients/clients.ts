import { Component } from '@angular/core';

interface ClientSegment {
  number: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients {

  segments: ClientSegment[] = [
    {
      number: '01',
      title: 'OEM Manufacturers',
      subtitle: 'Component development & production'
    },
    {
      number: '02',
      title: 'Tier Suppliers',
      subtitle: 'Reliable production partnerships'
    },
    {
      number: '03',
      title: 'Engineering Companies',
      subtitle: 'Drawing-based manufacturing'
    },
    {
      number: '04',
      title: 'Global Sourcing Teams',
      subtitle: 'International procurement support'
    }
  ];

}