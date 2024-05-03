import { Component, OnInit } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { VehiclesService } from '../../../vehicle-management/services/vehicles.service';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking/booking.service';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatIcon,
    MatButton,
    MatCardModule
  ],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})

export class BookingPageComponent implements OnInit {
  randomNumber: number = 0;
  vehicle: any = {};

  constructor(private vehiclesService: VehiclesService, private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.getNumber();
    const vehicleString = localStorage.getItem('vehicle');
    const vehicleJSON = vehicleString ? JSON.parse(vehicleString) : null;

    this.vehiclesService.getVehicles().subscribe((data: any) => {
      this.vehicle = data.filter((vehicle: any) => vehicle.id == vehicleJSON.id)[0];
    });
  }

  getNumber() {
    this.randomNumber= Math.floor(Math.random() * 90000) + 10000;

    setTimeout(() => {
      this.bookingService.getBookings().subscribe((data: any) => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const reservation = JSON.parse(localStorage.getItem('reservation') || '{}');
        const booking = {id: String(data.length + 1), userID: user.id, vehicleID: this.vehicle.id, status: 'confirmed', startTime: reservation.startDate, endDate: new Date()}
        this.bookingService.addBooking(booking).subscribe(((data: any) => {}));
        console.log('Booking added!');
      });

      this.router.navigate(['/confirmation']);
    }, 10000);
  }
}
