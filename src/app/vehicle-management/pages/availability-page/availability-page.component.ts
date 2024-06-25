import { Component } from '@angular/core';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { VehiclesMapComponent } from '../../components/vehicles-map/vehicles-map.component';


@Component({
  selector: 'app-availability-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, VehiclesMapComponent],
  templateUrl: './availability-page.component.html',
  styleUrl: './availability-page.component.css'
})

export class AvailabilityPageComponent {

}
