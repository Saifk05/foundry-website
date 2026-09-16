import { Component } from '@angular/core';

interface Industry {
  number: string;
  title: string;
  description: string;
  applications: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class Industries {

  industries: Industry[] = [
    {
      number: '01',
      title: 'Automotive & Mobility',
      description:
        'Precision cast components engineered for performance, consistency and demanding production environments.',
      applications: 'Housings · Brackets · Transmission · Brake Systems'
    },
    {
      number: '02',
      title: 'Agriculture & Off-Highway',
      description:
        'Durable castings designed for equipment operating under heavy loads and challenging field conditions.',
      applications: 'Tractors · Implements · Gear Systems · Pump Components'
    },
    {
      number: '03',
      title: 'Pumps & Valves',
      description:
        'Engineered cast components for fluid handling, industrial processing and utility applications.',
      applications: 'Pump Bodies · Valve Bodies · Housings · Industrial Systems'
    },
    {
      number: '04',
      title: 'Infrastructure',
      description:
        'Reliable casting solutions developed for demanding infrastructure and utility applications.',
      applications: 'Utilities · Construction · Heavy Equipment · Public Infrastructure'
    },
    {
      number: '05',
      title: 'General Engineering',
      description:
        'Customer-specific cast components manufactured around engineering drawings and application requirements.',
      applications: 'Machinery · Equipment · Custom Components · Industrial Assemblies'
    }
  ];

}