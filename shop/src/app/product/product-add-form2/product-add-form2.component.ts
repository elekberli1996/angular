import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Catagory } from 'src/app/catagory/catagory';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CatagoryiesService } from 'src/app/services/catagoryies.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers:[CatagoryiesService,ProductService]
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private catagoryService:CatagoryiesService,
    private productService:ProductService,private alertifyService:AlertifyService) { }

  productAddForm!:FormGroup;

  catagories!:Catagory[];

  product:Product = new Product()

createProductAddForm(){
  this.productAddForm=this.formBuilder.group(
    {
    name:["",Validators.email],
    description:[2,Validators.minLength(3)],
    imageUrl:["",Validators.required],
    price:["",Validators.required],
    catagoryId:["",Validators.required]
  })
}

  ngOnInit(): void {
    this.createProductAddForm();
      this.catagoryService.getCatagories().subscribe(data=>{
        this.catagories=data;
      })
      console.log(this.productAddForm.get('name')?.hasError('minLength'));

  }
  add(){
    if(this.productAddForm.valid)
    {
 this.product= Object.assign({},this.productAddForm.value);
 this.productService.addProduct(this.product).subscribe(data=>{
  this.alertifyService.Success(data.name);

 });
    }
  }

}
