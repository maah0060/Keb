import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      fornamn: ['', Validators.required],
      efternamn: ['', Validators.required],
      antguest: ['', [Validators.required, Validators.min(1)]],
      startDatum: ['', Validators.required],
      slutDatum: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      alert('Tack för din bokning!');
      this.bookingForm.reset(); // Tömmer alla fält i formuläret
    } else {
      alert('Alla fält måste fyllas i!');
    }
  }
}
