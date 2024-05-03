import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  baseUrl: string= enviroment.baseURL;
  constructor(private http: HttpClient) { }
  
  getVehicles() {
    return this.http.get(`${this.baseUrl}/ecovehicles`);
  }
}
