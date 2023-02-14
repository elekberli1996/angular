import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private http:HttpClient,private alertifyService:AlertifyService,private router:Router) { }
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

add(city: City){
  let numune:any;
  this.http.post(this.path+"Cities/add",city).subscribe(data=>{
    this.alertifyService.Success("added");
    numune=data;
   this.router.navigateByUrl("/cityDetail/"+numune.id);

  });
}

}
