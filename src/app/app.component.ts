import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfResaComponent } from './inf-resa/inf-resa.component';
import { BoendeComponent } from './boende/boende.component';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FooterComponent,
    NavbarComponent,
    InfResaComponent,
    BoendeComponent,
    StartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'c3Angular';

  // Variabel för att spåra menyns status
  isMenuActive = false;

  constructor(private router: Router) {}

  // scrolla till toppen när man byter route
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  // Metod för att toggla menyn
  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive; // Byter mellan true/false
  }
}
