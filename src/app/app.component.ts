import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { VehiclePageComponent } from './vehicle-management/components/vehicle-page/vehicle-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, VehiclePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecomove-web-application';
}
