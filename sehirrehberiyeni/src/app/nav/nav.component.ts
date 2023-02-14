import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder} from '@angular/forms'
import { LoginUser } from '../models/LoginUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService) { }
  loginUser!:LoginUser;
  loginForm!:FormGroup;
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  ngOnInit() {
    this.createLoginForm();
  }
  Login(){
    if(this.loginForm.valid){
    this.loginUser=Object.assign({},this.loginForm.value);

    this.authService.Login(this.loginUser);
 
    }
  }

  LogOut(){
    this.authService.logout();
  }

  get isAutenticated(){
    return this.authService.loggedIn();
  }




}
