import { Injectable } from '@angular/core';
import { enviroment } from "../../../../enviroments/enviroment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseURL: string = enviroment.baseURL;

  constructor(private http: HttpClient) { }

  getBookings() {
    return this.http.get(`${this.baseURL}/booking`);
  }

  getBooking(index: any) {
    return this.http.get(`${this.baseURL}/booking/${index}`);
  }

  addBooking(booking: any) {
    return this.http.post(`${this.baseURL}/booking`, JSON.stringify(booking));
  }
}

