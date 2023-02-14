import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './catagory/catagory.component';
import { LoginComponent } from './login/login.component';
import { LoginGuards } from './login/loginguard';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/catagory/:catagoryId',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForm1Component,canActivate:[LoginGuards]},
  {path:'product-add-2',component:ProductAddForm2Component},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
