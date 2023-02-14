import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private activateRoute:ActivatedRoute,private productService:ProductService) { }

  title="Urun Listesi";
//5227 5800 0028 2472
   filterText="";
  products!:Product[];
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.productService.getProduct(params['catagoryId']).subscribe(data=>{
      this.products=data;
    })
    })
    
    // proje acilan zaman calisir
   
  }
  consol(product: Product){
    this.alertifyService.Success(product.name+"  added");
  }
  run(e:any){
    console.log(e.target.value);
  }
  run1(){
    console.log("calisti");
  }
}
