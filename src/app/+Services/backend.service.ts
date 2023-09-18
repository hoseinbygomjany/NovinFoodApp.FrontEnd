import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI='https://localhost:7039/';
  
  constructor(public http:HttpClient) { }
}
