import { Component } from '@angular/core';

interface QualityControl {
  number: string;
  title: string;
  description: string;
}

interface QualityMetric {
  value: string;
  label: string;
}

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [],
  templateUrl: './quality.html',
  styleUrl: './quality.scss'
})
export class Quality {

  controls: QualityControl[] = [
    {
      number: '01',
      title: 'Material Verification',
      description:
        'Material composition and process parameters are monitored to support consistent metallurgical performance.'
    },
    {
      number: '02',
      title: 'Dimensional Inspection',
      description:
        'Critical dimensions are inspected against approved drawings and customer-defined requirements.'
    },
    {
      number: '03',
      title: 'Process Control',
      description:
        'Defined manufacturing checkpoints help maintain repeatability throughout the casting process.'
    },
    {
      number: '04',
      title: 'Final Inspection',
      description:
        'Finished components undergo final verification before approval, packing and dispatch.'
    }
  ];

  metrics: QualityMetric[] = [
    {
      value: '01',
      label: 'Incoming Material'
    },
    {
      value: '02',
      label: 'In-Process Control'
    },
    {
      value: '03',
      label: 'Final Inspection'
    },
    {
      value: '04',
      label: 'Dispatch Approval'
    }
  ];

}