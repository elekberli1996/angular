import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,throwError } from 'rxjs';
import { Product } from '../product/product';
import { catchError,tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  path="http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getProduct(catagoryId:Product):Observable<Product[]>{
    let newPath=this.path;
    if(catagoryId){
      newPath+="?catagoryId="+catagoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  addProduct(product:Product):Observable<Product>{
 const httpOption={
  headers: new HttpHeaders({

    'Content-Type':'application/json',
    'Authorization':'Token'
  })
 }

    return this.http.post<Product>(this.path,product,httpOption).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse){
   let errorMessage=""
    if(err.error instanceof ErrorEvent){
errorMessage="bir hata olustu"+err.error.message
   }
   else{
    errorMessage="sistemsel bir hata";
   }
   return throwError( errorMessage);
  }

}
