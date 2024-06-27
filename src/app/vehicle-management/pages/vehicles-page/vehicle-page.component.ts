import { Component, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card'
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-page',
  standalone: true,
  imports: [MatCardModule, RouterLink, NavbarComponent, FooterComponent, HttpClientModule],
  templateUrl: './vehicle-page.component.html',
  styleUrl: './vehicle-page.component.css'
})
export class VehiclePageComponent implements OnInit{
  vehicles: any = [];

  constructor(private vehiclesService: VehiclesService, private router: Router) { }
  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe((data: any) => {
      this.vehicles = data;
      console.log("data");
    });
  }


}
