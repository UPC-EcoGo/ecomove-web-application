import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { ReservationPageComponent } from './booking-reservation/components/reservation-page/reservation-page.component';
import {RentVehicleComponent} from "./booking-reservation/components/rent-vehicle/rent-vehicle.component";
import { ConfirmationReservationComponent } from './booking-reservation/components/confirmation-reservation/confirmation-reservation.component';
import {SupportComponent} from "./booking-reservation/components/support/support.component";
import { HistoryComponent } from './booking-reservation/components/history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ReservationPageComponent, RentVehicleComponent, ConfirmationReservationComponent, SupportComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecomove-web-application';
}
