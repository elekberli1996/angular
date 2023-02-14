import { Injectable } from '@angular/core';
import { Product } from '../product/product';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
Success(message:string){
  alertify.success(message);
}
Error(message:string){
  alertify.error(message);
};

  

  constructor() { }
}
