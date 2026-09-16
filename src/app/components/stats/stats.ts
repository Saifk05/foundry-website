import { Component } from '@angular/core';

interface FoundryStat {
  value: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {
  stats: FoundryStat[] = [
    {
      value: '25+',
      label: 'Years of Excellence',
      description: 'Engineering experience'
    },
    {
      value: '30,000',
      label: 'MT Annual Capacity',
      description: 'Production capability'
    },
    {
      value: '150+',
      label: 'Components',
      description: 'Developed & supplied'
    },
    {
      value: '15+',
      label: 'Countries',
      description: 'Global market presence'
    }
  ];
}