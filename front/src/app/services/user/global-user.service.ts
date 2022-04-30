import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalUserService {
  public urlApi = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) {}

  registerUser(object: any):Observable<any> {
    return this.http.post(`${this.urlApi}user/register` , object)
  }
  
  loginUser(object: any):Observable<any> {
    return this.http.post(`${this.urlApi}user/login` , object)
  }
}
