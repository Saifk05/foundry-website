import { Component } from '@angular/core';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  label: string;
}

@Component({
  selector: 'app-manufacturing-process',
  standalone: true,
  imports: [],
  templateUrl: './manufacturing-process.html',
  styleUrl: './manufacturing-process.scss'
})
export class ManufacturingProcess {

  steps: ProcessStep[] = [
    {
      number: '01',
      label: 'ENGINEERING',
      title: 'Drawing Review',
      description:
        'Customer drawings and specifications are reviewed for material, geometry, tolerances and manufacturing feasibility.'
    },
    {
      number: '02',
      label: 'TOOLING',
      title: 'Pattern & Mould',
      description:
        'Patterns, cores and moulding parameters are prepared around the component geometry and production requirement.'
    },
    {
      number: '03',
      label: 'METALLURGY',
      title: 'Melting',
      description:
        'Metal chemistry and melting parameters are controlled to achieve the required material characteristics.'
    },
    {
      number: '04',
      label: 'CASTING',
      title: 'Pouring & Cooling',
      description:
        'Molten metal is poured into prepared moulds and controlled through solidification and cooling.'
    },
    {
      number: '05',
      label: 'FINISHING',
      title: 'Fettling & Machining',
      description:
        'Cast components are cleaned, finished and machined where required to achieve production-ready geometry.'
    },
    {
      number: '06',
      label: 'QUALITY',
      title: 'Inspection & Dispatch',
      description:
        'Final dimensional and material checks are completed before approved components are prepared for dispatch.'
    }
  ];

}