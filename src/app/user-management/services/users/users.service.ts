import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../../enviroments/enviroment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string= enviroment.baseURL;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/{username}`);
  }

  getUser(username: string | null): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/username/${username}`);
  }
  registerUser(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/users`, user);
  }
}
