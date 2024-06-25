import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string= enviroment.baseURL;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users/{username}`);
  }
  registerUser(user: any) {
    return this.http.post(`${this.baseUrl}/users`, JSON.stringify(user));
  }
}
