import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-boende',
  imports: [FooterComponent, RouterLink],
  templateUrl: './boende.component.html',
  styleUrl: './boende.component.scss',
})
export class BoendeComponent {}
