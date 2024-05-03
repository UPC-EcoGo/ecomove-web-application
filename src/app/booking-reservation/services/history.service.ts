import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getBookings(index: any) {
    return this.http.get<any>(`${this.baseURL}booking/${index}`);
  }
}
