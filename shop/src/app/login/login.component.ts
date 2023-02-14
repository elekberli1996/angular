import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AcountService } from '../services/acount.service';
import { User } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder,private accountServeice:AcountService,
    private router:Router,private el: ElementRef) { }

  loginForm!:FormGroup;
  username="";
  password="";

user:User = new User();

createLoginForm() 
{

  this.loginForm =this.formBuilder.group({
    userName:["",Validators.required],
    password:["",Validators.required]
  });

}



  ngOnInit(): void {
    this.createLoginForm();
    

  }
  login(){
    
    if(this.loginForm.valid){
      this.user=Object.assign({},this.loginForm.value);
      this.accountServeice.Login(this.user);
      this.router.navigate(["product-add-1"]);
      if(this.accountServeice.Login(this.user)==false){
     this.ekle();
  this.username="";
  this.password="";
 
      }


    }
   
  } 
  
  ekle(){
      const lForm= document.querySelector("#loginform");
      const input1= document.querySelector("#userName");
      const alert= document.querySelector("#alert");
     // <div class="alert alert-danger"  >Istifadeci ve parol yanlisdir</div>
     const newelemet= document.createElement("div");
    newelemet.className="alert alert-danger";
    //console.log(newelemet);
    newelemet.textContent="sifre veya parol yanlisdir";
     lForm?.appendChild(newelemet);
     setTimeout(() => {
      lForm?.removeChild(newelemet);
     
     }, 3000);
  
 console.log(lForm);
     
    }
    calis()
    {let lformut=this.el.nativeElement.querySelector("#loginform");
    let alert3 = this.el.nativeElement.querySelector("#alert")
      
    alert3.
  
    console.log(alert3);

    }

}
