import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Catagory } from 'src/app/catagory/catagory';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CatagoryiesService } from 'src/app/services/catagoryies.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.css'],
  providers:[CatagoryiesService,ProductService]
})
export class ProductAddForm1Component implements OnInit {

  constructor(private catagoryService:CatagoryiesService,private alertifyService:AlertifyService,private productService:ProductService) { }

  model:Product=new Product();

  catagoryies!:Catagory[];

  ngOnInit(): void {
    this.catagoryService.getCatagories().subscribe(data=>{
      this.catagoryies=data;
    })
  }
  Add(form:Form){
    this.productService.addProduct(this.model).subscribe(data=>{
 this.alertifyService.Success(data.name+"eklendi");
 this.model.name="";
    }
    )
  }

}
