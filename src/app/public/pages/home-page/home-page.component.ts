import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VehiclesService } from '../../../vehicle-management/services/vehicles.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, RouterLink, MatButtonModule, NavbarComponent, FooterComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  vehicles: any = [];

  constructor(private vehiclesService: VehiclesService, private router: Router) { }
  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe((data: any) => {
      this.vehicles = data.slice(0, 8);
    });
  }
}
