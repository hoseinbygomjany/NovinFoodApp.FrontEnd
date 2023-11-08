import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { catchError, expand, pipe, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
    }).pipe(
      catchError(this.handleError)
    );
    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status==500) {
    return throwError(() => new Error(error.error.error));
    }
    return "Ok"; 
    // if (error.status === 0) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(
    //     `Backend returned code ${error.status}, body was: `, error.error);
    // }
    // // Return an observable with a user-facing error message.
    // return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
