import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { expand } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityService extends BackendService {
  signin(username:string,password:string){
    return this.http.post (this.securityAPI+'signin',{username:username,password:password})
  }
  loginmanager(username:string,password:string){
    return this.http.post (this.securityAPI+'loginmanager',{username:username,password:password})
  }
  signup(username:string,password:string,fullname:string,type:number){
    return this.http.post(this.securityAPI+'signup',
    {
      username:username,
      password:password,
      fullname:fullname,
      type:type
    });
  }
}
