import { Component, OnInit } from '@angular/core';
import {GoogleMap, MapMarker} from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface Vehicle {
  status: string,
  location: {
      latitude: number;
      longitude: number;
  };
}

@Component({
  selector: 'app-vehicles-map',
  standalone: true,
  imports: [GoogleMap, MapMarker, HttpClientModule, RouterLink],
  templateUrl: './vehicles-map.component.html',
  styleUrl: './vehicles-map.component.css'
})
export class VehiclesMapComponent implements OnInit {

  vehicles: any = []; 
  center = {lat: 0, lng: 0};
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];


  constructor(private vehiclesService: VehiclesService, private router: Router) { }

  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe((data: any) => {
      this.vehicles = data;
      this.vehicles.forEach((vehicle: Vehicle) => {
        if(vehicle.status === 'disponible')
          this.markerPositions.push({lat: vehicle.location.latitude, lng: vehicle.location.longitude});
      });
    });



    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    }
  }

  getMarker(position: any): void {
    const marker = this.vehicles.filter((vehicle: Vehicle) => {
      return vehicle.location.latitude === position.lat && vehicle.location.longitude === position.lng;
    });
    localStorage.setItem('vehicle', JSON.stringify(marker[0]));
    this.router.navigate(['/booking']);
  }

}
