import { Component } from '@angular/core';

interface Advantage {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss'
})
export class WhyUs {

  advantages: Advantage[] = [
    {
      number: '01',
      title: 'Engineering-Led Approach',
      description:
        'Requirements begin with drawings, material specifications and application needs before moving into production.'
    },
    {
      number: '02',
      title: 'Integrated Manufacturing',
      description:
        'Casting, finishing, machining and inspection can be coordinated through a structured manufacturing workflow.'
    },
    {
      number: '03',
      title: 'Quality Focus',
      description:
        'Process controls and inspection checkpoints are built into manufacturing to support consistent component quality.'
    },
    {
      number: '04',
      title: 'Custom Development',
      description:
        'Components can be developed around customer-specific drawings, specifications and production requirements.'
    },
    {
      number: '05',
      title: 'Scalable Production',
      description:
        'Manufacturing planning can support requirements ranging from development programs to recurring production.'
    },
    {
      number: '06',
      title: 'Responsive Collaboration',
      description:
        'Clear technical communication helps engineering and sourcing teams move requirements toward manufacturing review.'
    }
  ];

}