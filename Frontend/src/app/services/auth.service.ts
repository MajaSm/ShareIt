import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  private baseUrl:string = "https://localhost:7192/api/User/";
  

  signUp(userObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  login(loginobj:any)
  {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginobj)
  }
}
