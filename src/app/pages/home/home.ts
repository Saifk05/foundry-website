import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { About } from '../../components/about/about';
import { Products } from '../../components/products/products';
import { Industries } from '../../components/industries/industries';
import { Capabilities } from '../../components/capabilities/capabilities';
import { ManufacturingProcess } from '../../components/manufacturing-process/manufacturing-process';
import { Infrastructure } from '../../components/infrastructure/infrastructure';
import { Quality } from '../../components/quality/quality';
import { FactoryVideo } from '../../components/factory-video/factory-video';
import { AiAssistant } from '../../components/ai-assistant/ai-assistant';
import { Rfq } from '../../components/rfq/rfq';
import { WhyUs } from '../../components/why-us/why-us';
import { GlobalPresence } from '../../components/global-presence/global-presence';
import { Clients } from '../../components/clients/clients';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Hero,
    Stats,
    About,
    Products,
    Industries,
    Capabilities,
    ManufacturingProcess,
    Infrastructure,
    Quality,
    FactoryVideo,
    AiAssistant,
    Rfq,
    WhyUs,
    GlobalPresence,
    Clients,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}