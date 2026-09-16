import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear = new Date().getFullYear();

  companyLinks: FooterLink[] = [
    { label: 'About Us', href: '#about' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Quality', href: '#quality' },
    { label: 'Industries', href: '#industries' }
  ];

  capabilityLinks: FooterLink[] = [
    { label: 'Melting & Metallurgy', href: '#capabilities' },
    { label: 'Precision Moulding', href: '#capabilities' },
    { label: 'Machining', href: '#capabilities' },
    { label: 'Inspection & Testing', href: '#quality' }
  ];

  resourceLinks: FooterLink[] = [
    { label: 'Casting Solutions', href: '#products' },
    { label: 'Manufacturing Process', href: '#process' },
    { label: 'Factory Experience', href: '#factory-video' },
    { label: 'Foundry Assistant', href: '#ai-assistant' }
  ];

}