import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../enviroments/enviroment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  baseUrl: string= enviroment.baseURL;
  constructor(private http: HttpClient) { }


  getVehicles(): Observable<any> {

    const vehicles = this.http.get(`${this.baseUrl}/eco-vehicles`);
    console.log(vehicles);
    return vehicles;
  }
}
