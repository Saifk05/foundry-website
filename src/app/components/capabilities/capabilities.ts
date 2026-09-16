import { Component } from '@angular/core';

interface Capability {
  number: string;
  title: string;
  description: string;
  specs: string[];
  icon: 'melting' | 'moulding' | 'machining' | 'quality';
}

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [],
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.scss'
})
export class Capabilities {

  capabilities: Capability[] = [
    {
      number: '01',
      title: 'Melting & Metallurgy',
      description:
        'Controlled melting processes engineered for consistent chemistry, mechanical properties and repeatable casting performance.',
      specs: [
        'Grey Iron',
        'Ductile / SG Iron',
        'Controlled Chemistry'
      ],
      icon: 'melting'
    },
    {
      number: '02',
      title: 'Precision Moulding',
      description:
        'Modern moulding systems designed for dimensional consistency, repeatability and efficient high-volume production.',
      specs: [
        'Automated Moulding',
        'Process Control',
        'Complex Geometries'
      ],
      icon: 'moulding'
    },
    {
      number: '03',
      title: 'Machining',
      description:
        'Value-added machining capability for supplying production-ready components built to customer drawings and specifications.',
      specs: [
        'CNC Machining',
        'Precision Finishing',
        'Drawing-Based Production'
      ],
      icon: 'machining'
    },
    {
      number: '04',
      title: 'Inspection & Testing',
      description:
        'Structured inspection throughout production helps ensure material integrity, dimensional accuracy and traceability.',
      specs: [
        'Dimensional Inspection',
        'Material Testing',
        'Traceability'
      ],
      icon: 'quality'
    }
  ];

}