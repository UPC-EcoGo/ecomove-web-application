import { Injectable } from '@angular/core';
import { enviroment } from "../../../../enviroments/enviroment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseURL: string = enviroment.baseURL;

  constructor(private http: HttpClient) { }

  getBookings(): Observable<any>{
    return this.http.get(`${this.baseURL}/bookings`);
  }

  getBooking(index: any): Observable<any>{
    return this.http.get(`${this.baseURL}/bookings/${index}`);
  }

  addBooking(booking: any): Observable<any>{
    return this.http.post(`${this.baseURL}/bookings`, (booking));
  }
}

