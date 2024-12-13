import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { InfResaComponent } from './inf-resa/inf-resa.component';
import { BoendeComponent } from './boende/boende.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: 'boende', component: BoendeComponent },
  { path: '', component: StartComponent },
  { path: 'infresa', component: InfResaComponent },
];
