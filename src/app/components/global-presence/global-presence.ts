import { Component } from '@angular/core';

interface GlobalCapability {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-global-presence',
  standalone: true,
  imports: [],
  templateUrl: './global-presence.html',
  styleUrl: './global-presence.scss'
})
export class GlobalPresence {

  capabilities: GlobalCapability[] = [
    {
      number: '01',
      title: 'Export-Ready Supply',
      description:
        'Manufacturing and documentation workflows can be aligned with international customer requirements.'
    },
    {
      number: '02',
      title: 'Technical Collaboration',
      description:
        'Clear engineering communication supports drawing reviews, specifications and component development.'
    },
    {
      number: '03',
      title: 'Production Planning',
      description:
        'Requirements can be planned around recurring production schedules and customer supply programs.'
    }
  ];

}