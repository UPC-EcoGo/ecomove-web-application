import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-vehicle-page',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './vehicle-page.component.html',
  styleUrl: './vehicle-page.component.css'
})
export class VehiclePageComponent {

}
