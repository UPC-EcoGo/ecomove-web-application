import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-rent-vehicle',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './rent-vehicle.component.html',
  styleUrl: './rent-vehicle.component.css'
})

export class RentVehicleComponent {
  randomNumber: number = 0;

  constructor() {
  this.getNumber()

  }

  getNumber() {
    this.randomNumber= Math.floor(Math.random() * 90000) + 10000;
  }
}
