import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/LoginUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';

@Injectable()
export class AuthService {
 

constructor(private http:HttpClient,private router:Router,private alertifyService:AlertifyService) { }
   path="https://localhost:44381/api/auth/";
   userToken:any;
   decodedToken:any;
   TOKEN_KEY="token"
   jwtHelper:JwtHelperService = new JwtHelperService ();
Login(loginUser:LoginUser){
   
    let headers= new HttpHeaders();
    headers=headers.append("Content-Type","application/json");

    this.http.post(this.path+"login",loginUser,{headers:headers}).subscribe(data=>{
        
        this.userToken=data.toString();
        this.saveToken(this.userToken);
        this.decodedToken=this.jwtHelper.decodeToken(this.userToken);

      console.log(this.decodedToken);
      console.log(this.getCurrentUserId());
      console.log(this.loggedIn());
      console.log(this.token);
       this.alertifyService.Success("sisteme giris yapildi");
        this.router.navigateByUrl('/city');
    });

}
register(registerUser:RegisterUser){
    let headers= new HttpHeaders();
    headers=headers.append("Content-Type","application/json");

    this.http.post(this.path+"register",registerUser,{headers:headers}).
    subscribe(data=>{

    });

}

saveToken(token:string){
    localStorage.setItem(this.TOKEN_KEY,token);
}

logout(){
    localStorage.removeItem(this.TOKEN_KEY);
}

loggedIn(){
  if(localStorage.getItem(this.TOKEN_KEY))
  {
    return true;
  }
  return false;
}

getCurrentUserId(){
    
    return this.decodedToken.nameid;
}

get token(){
    return localStorage.getItem(this.TOKEN_KEY);
}



}
