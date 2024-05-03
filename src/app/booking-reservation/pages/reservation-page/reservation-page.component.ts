import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule, MatDatepickerModule, NavbarComponent, FooterComponent, RouterLink, FormsModule],
  templateUrl: './reservation-page.component.html',
  styleUrl: './reservation-page.component.css'
})
export class ReservationPageComponent {
  formData: any = {};
  addReservation() {
    if(this.formData) {
      localStorage.setItem('reservation', JSON.stringify(this.formData));
    }
  }
}
