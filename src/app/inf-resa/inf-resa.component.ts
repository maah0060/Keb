import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from '../checklist/checklist.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inf-resa',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ChecklistComponent,
    FooterComponent,
  ],
  templateUrl: './inf-resa.component.html',
  styleUrl: './inf-resa.component.scss',
})
export class InfResaComponent implements OnInit {
  weatherList: any[] = [];
  dates: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url =
      'https://api.openweathermap.org/data/2.5/forecast?lat=67.88333&lon=18.55&appid=d6ee3bb8b8dffe3bb23781449c63ac3b';

    this.http.get(url).subscribe({
      next: (data: any) => {
        this.weatherList = data.list.slice(0, 5); // Hämta bara de första 5 elementen
        this.generateDates(); // Generera datum för dessa dagar
        console.log(this.weatherList);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      },
    });
  }

  // Generera datum för de kommande fem dagarna
  generateDates(): void {
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      this.dates.push(
        futureDate.toLocaleDateString('sv-SE', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        })
      );
    }
  }
}

