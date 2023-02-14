import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Catagory } from '../catagory/catagory';

@Injectable()
export class CatagoryiesService {
 path="http://localhost:3000/catagories"
  constructor(private http:HttpClient) { }

  getCatagories():Observable<Catagory[]>{
   return this.http.get<Catagory[]>(this.path).pipe(
    tap(data=>console.log(JSON.stringify(data) )),
    catchError(this.handleError)
   )

  }
  handleError(err:HttpErrorResponse) {
   let errorMessage=""
   if(err.error instanceof ErrorEvent){
    errorMessage="bir hata olusdu"+err.error.message
   }
   else{
    errorMessage="sistemsel bir hata olusdu";
   }
   return throwError(errorMessage) ;
  }
}
