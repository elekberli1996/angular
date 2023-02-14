import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private http:HttpClient) { }
path="https://localhost:44381/api/";
getCityies():Observable<City[]>{
   return this.http.get<City[]>(this.path+"Cities");
}
getCityById(cityId:number):Observable<City>{
  return this.http.get<City>(this.path+"Cities/detail/?id="+cityId);

}
getPhotosById(cityId:number):Observable<Photo[]>{

  return this.http.get<Photo[]>(this.path+"Cities/photos/?cityId="+cityId);
}

}
