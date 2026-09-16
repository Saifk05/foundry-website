import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  scrollToCapabilities(): void {
    document
      .getElementById('capabilities')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToRfq(): void {
    document
      .getElementById('rfq')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}