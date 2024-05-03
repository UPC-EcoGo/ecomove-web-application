import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  baseUrl: string= enviroment.baseURL;
  constructor(private http: HttpClient) { }
  
  getMemberships() {
    return this.http.get(`${this.baseUrl}/memberships`);
  }
}
